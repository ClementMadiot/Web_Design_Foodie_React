import Navbar from './Navbar';
import BannerBackground from "../assets/images/home-banner-background.png"
import BannerImage from '../assets/images/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <section id='home' className='home-container'>
      <Navbar/>
      <header className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="banner-background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favorite Food Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
          <button className="secondary-button">
            Order Now <FiArrowRight/>
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="Banner-food" />
        </div>
      </header>
    </section>
  );
};

export default Home;