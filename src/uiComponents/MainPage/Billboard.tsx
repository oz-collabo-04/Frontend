import Slider from 'react-slick';
import billboard1 from '@/assets/images/billboard.jpg';
import billboard2 from '@/assets/images/billboard2.jpg';
import billboard3 from '@/assets/images/billboard3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/MainPage/slider.scss';
import { NextArrow, PrevArrow } from './Arrow';

function Billboard() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoPlaySpeed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    waitForAnimate: false,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div>
          <h2 className='textContainer colorDiff'>
            영화같은 <br />
            웨딩을 위한 서비스
          </h2>
          <img src={billboard1} />
        </div>
        <div>
          <h2 className='textContainer'>
            영화같은 <br />
            웨딩을 위한 서비스
          </h2>
          <img src={billboard2} />
        </div>
        <div>
          <h2 className='textContainer colorDiff'>
            영화같은 <br />
            웨딩을 위한 서비스
          </h2>
          <img src={billboard3} />
        </div>
      </Slider>
    </div>
  );
}

export default Billboard;
