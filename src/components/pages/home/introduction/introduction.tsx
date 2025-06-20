import React from 'react';
import './introduction.scss'
import ButtonFilled from '../../../../ui/button/button-filled';

const Introduction = () => {
    return (
        <div>
            <h1 className='title'>
                A new economic primitive <br /> for funding decentralized AI
            </h1>
            <h2 className='subTitle'>We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</h2>
            <ButtonFilled color='main' size='m'>
                Buy Spice AI
            </ButtonFilled>
        </div>
    );
};

export default Introduction;