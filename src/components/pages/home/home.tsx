import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../../layouts/header/header';
import Introduction from './introduction/introduction';
import IntegratedProjects from './integrated-projects/integrated-projects';
import styles from './home.module.scss';
import MoonLayer from './layers/moon-layer/moon-layer';
import BackgroundLayer from './background-layer/background-layer';

export default function HomePage() {
  return (
    <>
      <Parallax pages={2} className={styles.parallaxContainer}>
        <MoonLayer/>
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
