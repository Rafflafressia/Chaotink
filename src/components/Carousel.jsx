import Slider from "react-slick";
import F5Minute_1 from "../assets/baketomo_pics/baketomo_1.jpg";
import F5Minute_2 from "../assets/baketomo_pics/baketomo_2.jpg";
import F5Minute_3 from "../assets/baketomo_pics/baketomo_3.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const images = [F5Minute_1, F5Minute_2, F5Minute_3];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="mx-auto w-[875px] rounded-3xl shadow-[0px_4px_23px_5px_rgba(0,0,0,0.25)]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
