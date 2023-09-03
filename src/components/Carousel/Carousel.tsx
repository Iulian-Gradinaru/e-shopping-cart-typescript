import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { data } from '../../utils/data';

export const Carousel: React.FC = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '100px',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <div className="carousel-buttons">
        <button className="slick-prev">Prev</button>
        <button className="slick-next">Next</button>
      </div>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
