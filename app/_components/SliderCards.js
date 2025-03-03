"use client";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCards({reviews}) {
    const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,      
          };
    return(<Slider {...settings} className="w-[90%] mx-auto my-[90px]">
        {reviews.map((review, index) => <ReviewCard key={index} name={review.fullName} location={review.location} header={review.header} text={review.text} stars={review.rating} image={review.img} prodImage={review.product_image}/>)}
    </Slider>);
}