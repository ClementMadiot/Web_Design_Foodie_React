// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
// Import Photo + icon
import Client from '../assets/images/john-doe-image.png'
import Client2 from '../assets/images/sarah.jpg'
import Client3 from '../assets/images/lilia-greyart.jpg'
import { AiFillStar } from 'react-icons/ai'

SwiperCore.use([Navigation, Pagination])

export default function SwiperCustomer() {
  const styleWHite = { color: '#999999' }

  const testimonialArray = [
    {
      id: 'C1',
      img: Client,
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
      img: Client2,
      desc: `With Healthy Switcher, I can enjoy nutritious, home-cooked meals without the hassle. The prepped ingredients save me so much time. It's a game-changer for my diet and lifestyle!`,
      name: `Sarah Lelone`,
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
      img: Client3,
      desc: `"Healthy Switcher has completely transformed the way I eat. The convenience of having prepped ingredients ready to cook has made it easy to stick to a balanced diet.`,
      name: `Lilia Greyart`,
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
    <Swiper style={{
      "--swiper-pagination-color": "#fe9e0d",
      "--swiper-pagination-bullet-size": "11px",
      "--swiper-pagination-bullet-horizontal-gap": "4px",
      // "--swiper-pagination-bullet-inactive-color": "#999999",
      // "--swiper-pagination-bullet-inactive-opacity": "1",
    }}
    
      id="swiper"
      loop={true}
      slidesPerView={1}
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
