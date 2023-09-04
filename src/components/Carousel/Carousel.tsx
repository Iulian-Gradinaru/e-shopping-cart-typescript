import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { data } from '../../utils/data';

const CustomPrevArrow = () => <div></div>;
const CustomNextArrow = () => <div></div>;

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
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
