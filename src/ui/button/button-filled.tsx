'use client'
import classNames from 'classnames'
import {
  useCallback,
  useState,
  forwardRef,
  ButtonHTMLAttributes,
  MouseEvent
} from 'react'
import './button.scss'
import ButtonRaw from './button-raw'
import { v4 as uuidv4 } from 'uuid'

const BUTTON_SIZE = {
  s: 'smallButton',
  m: 'mediumButton',
  l: 'largeButton',
} as const

const BACKGROUND_COLOR = {
  main: 'mainButton',
  secondary: 'secondaryButton',
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

  const tooltipId = tooltipContent ? uuidv4() : undefined

  return (
    <>
      <ButtonRaw
        className={classNames(
          'button',
          buttonColorClass,
          buttonSizeClass,
          className
        )}
        onClick={handleClick}
        disabled={isDisabled}
        type={type}
        ref={ref}
        data-tooltip-id={tooltipId}
        {...props}
      >
        {children}
      </ButtonRaw>
    </>
  )
})

ButtonFilled.displayName = 'ButtonFilled'
export default ButtonFilled
