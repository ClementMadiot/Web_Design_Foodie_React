// import img
import PickMeaks from '../assets/images/pick-meals-image.png'
import ChooseMeals from '../assets/images/choose-image.png'
import DeliveryMeals from '../assets/images/delivery-image.png'

const Work = () => {
  const workInfoData = [
    {
      image: PickMeaks,
      title: 'Pick Meals',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt porro similique. Officia molestias quam fuga ducimus, sed ipsum.',
    },
    {
      image: ChooseMeals,
      title: 'Choose How Often',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    },
    {
      image: DeliveryMeals,
      title: 'Fast Deliveries',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt porro similique.',
    },
  ]
  return (
    <section className="work-section-wrapper">
      <article className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          temporibus dicta ipsa voluptatibus aliquam pariatur eum? Quo
          repudiandae
        </p>
      </article>
      <article className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.image} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Work