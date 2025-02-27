import MainPageHeader from "./MainPageHeader";
import MainPagePar from "./MainPagePar";
import ReviewCard from "./ReviewCard";

export default function Testimonials() {
    const review = {
        name: "Jesse Smith",
        location: "USA / Austin",
        header: "Absolutely Love Haven!",
        text: "Haven exceeded my expectations! The quality of the products is outstanding, and the designs are both stylish and timeless. Fast shipping and excellent customer service made my shopping experience even better—I’ll definitely be back!",
        rating: 5,
    }
    return(<div className="flex flex-col justify-between h-[850px] pb-[60px]">
        <div>
            <MainPageHeader noTop={true}>Testimonials</MainPageHeader>
            <MainPagePar>See what our customers are saying about Haven! Read their experiences and discover why they love our stylish, high-quality home decor and exceptional service.</MainPagePar>
        </div>
        <div className="flex justify-center items-center h-[635px] bg-green-100">
            <ReviewCard name={review.name} location={review.location} header={review.header} text={review.text} stars={review.rating}/>
        </div>
    </div>)
}