/**
 * Imports react-slick components
 */
import Slider from 'react-slick';

/**
 * Imports styles from slick-carousel
 */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Imports data
 */
import { data } from '../../utils/data';

/**
 * Imports styles components
 */
import { CarouselContainer } from './Carousel.styles';

/**
 * CustomPrevArrow and CustomNextArrow are custom arrow components used for navigation.
 */
const CustomPrevArrow = () => <div></div>;
const CustomNextArrow = () => <div></div>;

/**
 * Displays the component
 */
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
    <CarouselContainer className="carousel">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};
