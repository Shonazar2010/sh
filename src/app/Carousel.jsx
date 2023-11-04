import Slider from "react-slick";
import Img from "../img/pin.jpeg";
import { Image } from "@chakra-ui/react";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div> 
      <Slider {...settings} display={{base: "none", xl: "flex"}}>
        <div>
          <Image w={"100%"} borderRadius='2xl' src={Img}/>
        </div> 
        <div>
          <Image w={"100%"} borderRadius='2xl' src={Img}/>
        </div>
        <div>
          <Image w={"100%"} borderRadius='2xl' src={Img}/>
        </div>
        <div>
          <Image w={"100%"} borderRadius='2xl' src={Img}/>
        </div>
          </Slider>
    </div>

  );
};
export default Carousel
