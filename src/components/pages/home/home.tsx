import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../../layouts/header/header';
import Introduction from './introduction/introduction';
import IntegratedProjects from './integrated-projects/integrated-projects';
import styles from './home.module.scss';
import ImgLayer from './layers/img-layer/img-layer';
import BackgroundLayer from './layers/background-layer/background-layer';

export default function HomePage() {
  return (
    <>
      <Parallax pages={2} className={styles.parallaxContainer}>
        <ImgLayer/>
        <BackgroundLayer/>
        <ParallaxLayer offset={0} speed={1} style={{ zIndex: 2 }}>
          <div className="container" >
            <Header />
            <Introduction />
            <IntegratedProjects />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
