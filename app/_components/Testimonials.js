import { getReviews } from "../_lib/data-service";
import MainPageHeader from "./MainPageHeader";
import MainPagePar from "./MainPagePar";
import SliderCards from "./SliderCards";

export default async function Testimonials() {
    const reviews = await getReviews();
    
    return(<div className="flex flex-col justify-between h-[850px] pb-[60px]">
        <div>
            <MainPageHeader noTop={true}>Testimonials</MainPageHeader>
            <MainPagePar>See what our customers are saying about Haven! Read their experiences and discover why they love our stylish, high-quality home decor and exceptional service.</MainPagePar>
        </div>
        <div className="h-[630px] bg-green-100">
            <SliderCards reviews={reviews} />
        </div>
    </div>)
}