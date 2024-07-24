import Slider from "react-slick";

const Carousel = ({images}) => {
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

  return (
    <div className="carousel-container">
      <Slider {...settings} arrows={false}>
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
