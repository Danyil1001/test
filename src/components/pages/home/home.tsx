import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../../layouts/header/header';
import Introduction from './introduction/introduction';
import IntegratedProjects from './integrated-projects/integrated-projects';
import MoonImg from '../../../assets/images/home/moon.png';
import styles from './home.module.scss';

export default function HomePage() {
  return (
    <div>
      <Parallax pages={2} className={styles.parallaxContainer}>
        <ParallaxLayer offset={0} speed={0} factor={2} style={{ zIndex: 0 }}>
          <div className={styles.background} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: 1 }}>
          <div className="container">
            <div className={styles.imgContainer}>
              <img src={MoonImg} alt="Moon" className={styles.moonImage} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} style={{ zIndex: 2 }}>
          <div className="container">
            <Header />
            <Introduction />
            <IntegratedProjects />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
