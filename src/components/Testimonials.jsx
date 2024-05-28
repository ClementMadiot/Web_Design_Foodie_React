import SwiperCustomer from './SwiperCustomer'


function Testimonials() {

  return (
    <section id="Testimonials">
      <div className="section-title">
        <h3>Testimonial</h3>
        <h2>What They Are Saying</h2>
        <p>
          Bellow you'll find feedback from our satisfied customers who have
          experienced the benefits of our services firsthand.
        </p>
        <SwiperCustomer />
      </div>
    </section>
  )
}

export default Testimonials
