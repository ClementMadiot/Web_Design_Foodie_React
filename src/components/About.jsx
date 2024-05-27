// import img
import AboutBgd from '../assets/images/about-background.png'
import AboutBgdImg from '../assets/images/about-background-image.png'
// import icon
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="about-banner-img">
        <img src={AboutBgd} alt="background-about" />
      </div>
      <div className="about-img">
        <img src={AboutBgdImg} alt="background-about-2" />
      </div>
      <div className="about-text">
        <h3>About</h3>
        <h2>
          Food Is An Important Part Of A balanced Diet
        </h2>
        <p>
        Food is crucial for a balanced diet, providing essential nutrients like vitamins, minerals, and proteins. A variety of foods from all major groups ensures optimal energy, growth, and overall health.
        </p>
        <p>
        Beyond nutrition, food impacts mental and emotional health. Balanced meals stabilize mood and energy, while certain foods support brain health. Sharing meals fosters community and emotional well-being, enhancing overall lifestyle.
        </p>
        <div className="about-btn">
          <button className="secondary-btn">Learn More</button>
          <button className="watch-video-btn">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
