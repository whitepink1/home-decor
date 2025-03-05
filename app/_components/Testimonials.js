import { getReviews } from "../_lib/data-service";
import MainPageHeader from "./MainPageHeader";
import MainPagePar from "./MainPagePar";
import SliderCards from "./SliderCards";

export default async function Testimonials({noTop}) {
    const reviews = await getReviews();
    
    return(<>{noTop ? 
        <div className="flex flex-col justify-between h-[630px]">
            <div className="h-full bg-green-100">
                <SliderCards reviews={reviews} />
            </div> 
        </div>
        :
        <div className="flex flex-col justify-between h-[800px]">
            <div>
                <MainPageHeader noTop={true}>Testimonials</MainPageHeader>
                <MainPagePar>See what our customers are saying about Haven! Read their experiences and discover why they love our stylish, high-quality home decor and exceptional service.</MainPagePar>
            </div>
        <div className="h-[630px] bg-green-100">
            <SliderCards reviews={reviews} />
        </div>
        </div>}
        </>)
}