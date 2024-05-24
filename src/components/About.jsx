// import img 
import AboutBgd from '../assets/images/about-background.png'
import AboutBgdImg from '../assets/images/about-background-image.png'
// import icon 
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <section id='about' className='about-section-container'>
      <div className="about-background-image-container">
        <img src={AboutBgd} alt="background-about" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBgdImg} alt="background-about-2" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h2 className="primary-heading">
          Food Is An Important Part Of A balanced Diet
        </h2>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptates eos itaque asperiores repellat sapiente, at laudantium eaque molestiae neque, omnis voluptate alias incidunt dicta mollitia voluptatibus ipsam nisi aliquam.
        </p>
        <p className="primary-text">
          Obcaecati voluptates eos itaque asperiores repellat sapiente, at laudantium eaque molestiae neque, omnis voluptate alias incidunt dicta mollitia voluptatibus ipsam nisi aliquam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
        </div>
      </div>
    </section>
  );
};

export default About;