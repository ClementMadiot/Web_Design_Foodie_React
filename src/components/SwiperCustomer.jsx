// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
// Import Photo + icon
import ProfilePic from '../assets/images/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

SwiperCore.use([Navigation, Pagination])

export default function SwiperCustomer() {
  const styleWHite = { color: '#6a6a6a' }

  const testimonialArray = [
    {
      id: 'C1',
      img: ProfilePic,
      desc: `I absolutely love Foodie! The variety and quality are exceptional. Fast delivery ensures my meals are always fresh. Highly recommend!`,
      name: `John Doe`,
      stars: [
        <AiFillStar key='A1'/>,
        <AiFillStar key='A2' />,
        <AiFillStar key='A3' />,
        <AiFillStar key='A4' />,
        <AiFillStar key='A5' />,
      ],
    },
    {
      id: 'C2',
      img: ProfilePic,
      desc: `lorem2 What They Are Saying`,
      name: `Bob Lelone`,
      stars: [
        <AiFillStar key='AA1'/>,
        <AiFillStar key='AA2' />,
        <AiFillStar key='AA3' />,
        <AiFillStar key='AA4' />,
        <AiFillStar key='AA5' style={styleWHite} />,
      ],
    },
    {
      id: 'C3',
      img: ProfilePic,
      desc: `Bellow you'll find feedback from our satisfied customers who have experienced the benefits of our services firsthand.`,
      name: `Jean-Paul Belmondo`,
      stars: [
        <AiFillStar key='AAA1'/>,
        <AiFillStar key='AAA2' />,
        <AiFillStar key='AAA3' />,
        <AiFillStar key='AAA4' style={styleWHite}  />,
        <AiFillStar key='AAA5' style={styleWHite} />,
      ],
    },
  ]

  return (
    <Swiper
      id="swiper"
      loop={true}
      slidesPerView={1}
      // onReachEnd={() => {
      //   console.log('reach end')
      //   const tmp = testimonialArray.unshift()
      //   testimonialArray.push(tmp)
      // }}
      navigation
      pagination={{
        clickable: true,
        type: 'bullets',
        dynamicBullets: true,
      }}
    >
      <div className="swiper">
        {testimonialArray.map((item, i) => (
          <SwiperSlide
          key={item.id}
            id={`slide-${testimonialArray.length}`}
            style={{ listStyle: 'none' }}
          >
            <div className="testimonial-card">
              <img src={item.img} alt={item.name} />
              <p>{item.desc}</p>
              <div className="testimonials-stars-container">{item.stars}</div>
              <h4>{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}
