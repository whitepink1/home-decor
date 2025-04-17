import MainPageHeader from "../MainPageHeader";
import MainPagePar from "../MainPagePar";
import OurBlogCard from "../OurBlogCard";
import about3 from "@/public/about3.jpg";
import about4 from "@/public/about4.jpg";
import about5 from "@/public/about5.jpg";

export default function OurBlog() {
    return(<div className="h-fit mb-[60px] mx-[50px]">
        <MainPageHeader>Our Blog</MainPageHeader>
        <MainPagePar>Stay inspired with the latest trends, design tips, and expert insights from Haven. Our blog is your go-to source for home decor inspiration, styling advice, and creative ideas to transform your living space.</MainPagePar>
        <div className="flex justify-center gap-[30px] pt-[30px] max-[1450px]:flex-col max-[1450px]:items-center min-[1450px]:pt-[60px]">
            <OurBlogCard img={about4} date="05 March, 2025" name="The Art of Mixing Modern and Classic Styles"/>
            <OurBlogCard img={about3} date="16 January, 2025" name="Top 2025 Home Decor Trends You Need to Know"/>
            <OurBlogCard img={about5} date="29 December, 2024" name="How to Create a Cozy and Functional Living Room"/>
        </div>
    </div>)
}