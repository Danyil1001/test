import { useRef } from 'react';
import styles from './introduction.module.scss';
import ButtonFilled from '../../../components/ui/button/button-filled';
import CountCard from '../../../components/shared/count-card/count-card';
import { cardsInfo, CardInfoType } from './data';
import { useIntersectionObserver } from '../../../utils/hooks/useIntersectionObserver';

const Introduction = () => {
    const cardsRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useIntersectionObserver(cardsRef, 0.2);

    return (
        <div className={styles.introduction}>
            <h1 className={styles.title}>
                A new economic primitive<br />for funding decentralized AI
            </h1>
            <h2 className={styles.subTitle}>
                We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
            </h2>
            <ButtonFilled color='main' size='l'>Buy Spice AI</ButtonFilled>

            <div className={styles.cardsContainer} ref={cardsRef}>
                {cardsInfo.map((cardInfo: CardInfoType, index) => (
                    <CountCard
                        key={`card-info-${index}`}
                        index={index}
                        cardInfo={cardInfo}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </div>
    );
};

export default Introduction;
