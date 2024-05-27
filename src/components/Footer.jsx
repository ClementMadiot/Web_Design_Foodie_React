// import img + icon
import Logo from '../assets/images/Logo.svg'
import { BsTwitterX } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <article className="footer-right-columns">
        <div className="footer-logo-foodie">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-icons">
          <BsTwitterX />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </article>
      <article className="footer-left-column">
        <div className="footer-list">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-list">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-list">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </article>
      <div>
        {/* <a href="#home">Home</a>

        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#cart">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
      </div>
    </footer>
  )
}

export default Footer
