import OurTeam from "../_components/OurTeam";
import about1 from "@/public/about1.jpg";
import about2 from "@/public/about2.jpg";
import Image from "next/image";
import Testimonials from "../_components/Testimonials";
import OurBlog from "../_components/OurBlog";
import Sponsors from "../_components/Sponsors";

export const metadata = {
    title: "About Us",
  };

  export default function Page() {
    return (<main>
        <div className="flex justify-center items-center h-[420px] bg-[url('../public/main2.jpg')] bg-cover bg-center text-center align-middle mb-[60px]">
            <h1 className="text-[50px] font-bold text-basic-50">About Us</h1>
        </div>
        <div className="flex flex-col justify-between items-center h-[900px] mx-base pt-[60px]">
          <div className="flex justify-between h-[90px] w-[65vw]">
            <h2 className="text-[44px] w-[390px] font-semibold leading-[50px]">Where Beauty Meets Functionality</h2>
            <p className="text-[16px] max-w-[550px] leading-[24px]">Discover home decor that blends aesthetics with practicality. Each piece in our collection is thoughtfully designed to elevate your space while ensuring everyday comfort and usability. Transform your home with elegance that works for you.</p>
          </div>
          <div className="w-[65vw] h-[65vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ggcnjCTVj3M?si=CcY1bWTmWNnqCxtO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
        <OurTeam />
        <div className="h-[500px] w-auto flex justify-between mx-base mt-[60px]">
          <Image style={{objectFit: "contain"}}  className="w-[640px] opacity-95" src={about1} alt="Home decor About  page" />
          <div className="flex flex-col justify-between h-[350px] w-[550px] my-auto">
            <h3 className="text-[40px] font-semibold">Exquisite Home Decor for Discerning Connoisseurs</h3>
            <p className="text-[16px]">At Haven, we curate a collection of sophisticated home decor pieces designed for those who appreciate the finer things in life. Every item embodies elegance, craftsmanship, and timeless style, transforming your space into a true reflection of luxury and refinement.</p>
            <button className="uppercase h-[50px] w-[205px] bg-basic-600 text-basic-50 text-[20px] font-semibold">learn more</button>
          </div>
        </div>
        <div className="h-[500px] w-auto flex justify-between mx-base">
          <div className="flex flex-col justify-between items-start h-[350px] w-[550px] my-auto">
            <h3 className="text-[40px] font-semibold">Discover the Art of Living</h3>
            <p className="text-[16px]">At Haven, we believe that home is more than just a place—it’s a reflection of your personality, style, and comfort.</p>
            <ul className="list-disc pl-5">
              <li>Timeless Design – Thoughtfully crafted.</li>
              <li>Exceptional Quality – Made from premium materials.</li>
              <li>Effortless Elegance – Seamlessly blend aesthetics.</li>
            </ul>
            <button className="uppercase h-[50px] w-[205px] bg-basic-600 text-basic-50 text-[20px] font-semibold">learn more</button>
          </div>
          <Image style={{objectFit: "contain"}} className="w-[640px] opacity-95" src={about2} alt="Home decor 2 About page"/>
        </div>
        <Testimonials noTop={true}/>
        <OurBlog />
        <Sponsors />
    </main>)
  }