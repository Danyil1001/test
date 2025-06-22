import styles from './header.module.scss'
import ButtonFilled from '../../ui/button/button-filled';

const Header = () => {
    return (
        <header className={styles.header}>
            <ButtonFilled color='secondary' size='m'>
                LLM Leaderboard
            </ButtonFilled>
            <ButtonFilled size='m'>
                Buy Spice AI
            </ButtonFilled>
        </header>
    );
};

export default Header;