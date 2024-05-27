import ProfilePic from '../assets/images/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <div className="section-title">
        <h3>Testimonal</h3>
        <h2>What They Are Saying</h2>
        <p>
        Bellow you'll find feedback from our satisfied customers who have experienced the benefits of our services firsthand. 
        </p>
        <div className="testimonial-card">
          <img src={ProfilePic} alt="John Doe" />
          <p>
          I absolutely love Foodie! The variety and quality are exceptional. Fast delivery ensures my meals are always fresh. Highly recommend!
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h4>John Doe</h4>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
