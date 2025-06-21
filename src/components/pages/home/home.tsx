import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './home.scss';
import Header from '../../layouts/header/header';
import Introduction from './introduction/introduction';
import IntegratedProjects from './integrated-projects/integrated-projects';
import MoonImg from '../../../assets/images/home/moon.png'

export default function HomePage() {
  return (
    <div>
      <Parallax pages={2} className="parallax-container">

        <ParallaxLayer offset={0} speed={0} factor={2} style={{ zIndex: 0 }}>
          <div className="background" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: 1 }}>
          <div className='container'>
            <div className="imgContainer">
              <img src={MoonImg} alt="Moon" className="moon-image" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} style={{ zIndex: 2 }}>
          <div className="container">
            <Header />
            <Introduction />
            <IntegratedProjects></IntegratedProjects>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
