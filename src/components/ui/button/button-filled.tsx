import classNames from 'classnames'
import {
  useCallback,
  useState,
  forwardRef,
  ButtonHTMLAttributes,
  MouseEvent
} from 'react'
import styles from './button.module.scss'
import ButtonRaw from './button-raw'

const BUTTON_SIZE = {
  s: styles.smallButton,
  m: styles.mediumButton,
  l: styles.largeButton,
} as const

const BACKGROUND_COLOR = {
  main: styles.mainButton,
  secondary: styles.secondaryButton,
} as const

type ButtonSize = keyof typeof BUTTON_SIZE
type BackgroundColor = keyof typeof BACKGROUND_COLOR

const getClassForSize = (size: ButtonSize) => BUTTON_SIZE[size] || ''
const getClassForColor = (color: BackgroundColor) => BACKGROUND_COLOR[color] || ''

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: BackgroundColor
  isLoading?: boolean
  size?: ButtonSize
  tooltipContent?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>
}

const ButtonFilled = forwardRef<HTMLButtonElement, IProps>(({
  children,
  className,
  color = 'main',
  disabled,
  isLoading,
  onClick,
  size = 'm',
  tooltipContent,
  type = 'button',
  ...props
}, ref) => {
  const [isLoadingInner, setLoadingInner] = useState(false)

  const buttonSizeClass = getClassForSize(size)
  const buttonColorClass = getClassForColor(color)

  const isDisabled = disabled || isLoading || isLoadingInner

  const handleClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      if (typeof onClick === 'function') {
        const result = onClick(event)
        if (result && typeof result.then === 'function') {
          setLoadingInner(true)
          await result
          setLoadingInner(false)
        }
      }
    },
    [onClick]
  )

  return (
    <ButtonRaw
      className={classNames(
        styles.button,
        buttonColorClass,
        buttonSizeClass,
        className
      )}
      onClick={handleClick}
      disabled={isDisabled}
      type={type}
      ref={ref}
      {...props}
    >
      {children}
    </ButtonRaw>
  )
})

ButtonFilled.displayName = 'ButtonFilled'
export default ButtonFilled
