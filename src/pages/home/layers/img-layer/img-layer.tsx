import { ParallaxLayer } from '@react-spring/parallax';
import MoonImg from '../../../../assets/images/home/moon.png';
import styles from './img-layer.module.scss'

const ImgLayer=()=> {
  return (
    <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: 1 }}>
      <div className="container">
        <div className={styles.imgContainer}>
          <img src={MoonImg} alt="Moon" className={styles.image} />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default ImgLayer;