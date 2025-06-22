
import { CardInfoType } from '../data';
import styles from './count-card.module.scss';
interface Props {
    cardInfo: CardInfoType;
    index: number;
    isVisible: boolean;
}

const CountCard = ({ cardInfo, index, isVisible }: Props) => {
    return (
        <div
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            data-index={index}
        >
            <span className={styles.amount}>{cardInfo.amount}</span>
            <span className={styles.descr}>{cardInfo.description}</span>
        </div>
    );
};

export default CountCard;
