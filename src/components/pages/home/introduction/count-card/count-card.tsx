import { CardInfo } from '../data';
import './count-card.scss';

interface Props {
    cardInfo: CardInfo;
    index: number;
    isVisible: boolean;
}

const CountCard = ({ cardInfo, index, isVisible }: Props) => {
    return (
        <div
            className={`card animated-card ${isVisible ? 'visible' : ''}`}
            data-index={index}
        >
            <span className='amount'>{cardInfo.amount}</span>
            <span className='descr'>{cardInfo.description}</span>
        </div>
    );
};

export default CountCard;
