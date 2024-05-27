import Navbar from './Navbar'
import BannerBackground from '../assets/images/home-banner-background.png'
import BannerImage from '../assets/images/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <section id="Home"> 
      <Navbar />
      <header>
        <div className="home-banner-img">
          <img src={BannerBackground} alt="banner-background" />
        </div>
        <div className="home-text">
          <h1>
            Your Favorite Food Delivered Hot & Fresh
          </h1>
          <p>
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-btn">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-img">
          <img src={BannerImage} alt="Banner-food" />
        </div>
      </header>
    </section>
  )
}

export default Home
