import { ParallaxLayer } from '@react-spring/parallax';
import styles from './background-layer.module.scss'

const BackgroundLayer = () => {
    return (
        <ParallaxLayer offset={0} speed={0} factor={2} style={{ zIndex: 0 }}>
            <div className={styles.background} />
        </ParallaxLayer>
    );
}

export default BackgroundLayer;