import ProfilePic from '../assets/images/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <section id='testimonials' className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonal</p>
        <h2 className="primary-heading">What They Are Saying</h2>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="John Doe" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
          </div>
          <h2>John Doe</h2>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
