// import img
import PickMeaks from '../assets/images/pick-meals-image.png'
import ChooseMeals from '../assets/images/choose-image.png'
import DeliveryMeals from '../assets/images/delivery-image.png'

const Work = () => {
  const workInfoData = [
    {
      image: PickMeaks,
      title: 'Pick Meals',
      text: 'Browse our curated menu and select from a wide variety of delicious, nutritious meals, ensuring you always have satisfying and healthy choices.',
    },
    {
      image: ChooseMeals,
      title: 'Choose How Often',
      text: 'Flexibility is key, so we let you choose how often you want your meals delivered. We adapt to your schedule to keep your pantry stocked with fresh meals.',
    },
    {
      image: DeliveryMeals,
      title: 'Fast Deliveries',
      text: ' Enjoy the convenience of fast, our efficient delivery system ensures your meals arrive promptly, preserving their freshness and quality.',
    },
  ]
  return (
    <section>
      <article className="section-title">
        <h3>Work</h3>
        <h2>How It Works</h2>
        <p>
        A balanced diet works by providing essential nutrients from diverse food groups, supporting overall physical and mental health.
        </p>
      </article>
      <article className="work-card-container">
        {workInfoData.map((data) => (
          <div className="work-card-info" key={data.title}>
            <div className="work-card-info-img">
              <img src={data.image} alt={data.image} />
            </div>
            <h4>{data.title}</h4>
            <p>{data.text}</p>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Work
