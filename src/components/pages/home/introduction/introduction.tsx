import { useEffect, useRef, useState } from 'react';
import './introduction.scss';
import ButtonFilled from '../../../../ui/button/button-filled';
import CountCard from './count-card/count-card';
import { cardsInfo, CardInfo } from './data';

const Introduction = () => {
    const cardsRef = useRef<HTMLDivElement | null>(null); // ref for cards container
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // remove if you want repeated animation
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (cardsRef.current) {
            observer.observe(cardsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className='introduction'>
            <h1 className='title'>
                A new economic primitive <br /> for funding decentralized AI
            </h1>
            <h2 className='subTitle'>
                We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
            </h2>
            <ButtonFilled color='main' size='l'>Buy Spice AI</ButtonFilled>

            <div className='cardsContainer' ref={cardsRef}>
                {cardsInfo.map((cardInfo: CardInfo, index) => (
                    <CountCard
                        key={`card-info-${index}`}
                        index={index}
                        cardInfo={cardInfo}
                        isVisible={visible}
                    />
                ))}
            </div>
        </div>
    );
};


export default Introduction;
