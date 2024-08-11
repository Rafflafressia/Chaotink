import Slider from "react-slick";

const Carousel = ({ images, description }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="mx-auto rounded-3xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
