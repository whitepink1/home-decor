import OurTeam from "../_components/shared/OurTeam";
import about1 from "@/public/about1.jpg";
import about2 from "@/public/about2.jpg";
import Image from "next/image";
import Testimonials from "../_components/Testimonials";
import OurBlog from "../_components/shared/OurBlog";
import Sponsors from "../_components/shared/Sponsors";

export const metadata = {
    title: "About Us",
  };

  export default function Page() {
    return (<main>
        <div className="flex justify-center items-center h-[420px] bg-[url('../public/main2.jpg')] mb-[30px] bg-cover bg-center text-center align-middle min-[1450px]:mb-[60px]">
            <h1 className="text-[50px] font-bold text-basic-50">About Us</h1>
        </div>
        <div className="flex flex-col justify-between items-center h-fit mx-[20px] min-[800px]:mx-[50px] min-[1450px]:mx-base">
          <div className="flex justify-between h-fit w-[85vw] min-[800px]:w-[65vw] max-[1450px]:flex-col max-[1450px]:gap-5 max-[1450px]:items-center max-[1450px]:text-center max-[1350px]:w-[85vw] min-[1450px]:h-[90px]">
            <h2 className="text-[44px] w-[390px] font-semibold leading-[50px]">Where Beauty Meets Functionality</h2>
            <p className="text-[16px] max-w-[550px] h-auto leading-[24px]">Discover home decor that blends aesthetics with practicality. Each piece in our collection is thoughtfully designed to elevate your space while ensuring everyday comfort and usability. Transform your home with elegance that works for you.</p>
          </div>
          <div className="w-[80vw] min-[800px]:w-[65vw] block mt-[30px] min-[1450px]:mt-[80px]">
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/ggcnjCTVj3M?si=CcY1bWTmWNnqCxtO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
        <OurTeam />
        <div  className="flex flex-col h-fit justify-between items-center">
          <div className="h-auto w-full flex justify-center gap-x-[70px] mt-[60px] max-w-[1300px]">
            <Image className="w-[35vw] max-w-[600px] h-auto opacity-95 object-cover aspect-video max-[1350px]:hidden" src={about1} alt="Home decor About  page" />
            <div className="flex flex-col justify-between h-fit w-[65vw] gap-[25px] max-w-[700px] min-[1350px]:w-[35vw] min-[1350px]:max-w-[600px] min-[700px]:h-[350px] my-auto">
              <h3 className="text-[40px] font-semibold">Exquisite Home Decor for Discerning Connoisseurs</h3>
              <p className="text-[16px]">At Haven, we curate a collection of sophisticated home decor pieces designed for those who appreciate the finer things in life. Every item embodies elegance, craftsmanship, and timeless style, transforming your space into a true reflection of luxury and refinement.</p>
              <button className="uppercase h-[50px] w-[205px] bg-basic-600 text-basic-50 text-[20px] font-semibold">learn more</button>
            </div>
          </div>
          <div className="h-auto w-full flex justify-center gap-x-[70px] my-[60px]">
            <div className="flex flex-col justify-between items-start h-fits w-[65vw] gap-[25px] max-w-[700px] min-[1350px]:w-[35vw] min-[1350px]:max-w-[600px] min-[700px]:h-[350px] my-auto">
              <h3 className="text-[40px] font-semibold">Discover the Art of Living</h3>
              <p className="text-[16px]">At Haven, we believe that home is more than just a place—it’s a reflection of your personality, style, and comfort.</p>
              <ul className="list-disc pl-5">
                <li>Timeless Design – Thoughtfully crafted.</li>
                <li>Exceptional Quality – Made from premium materials.</li>
                <li>Effortless Elegance – Seamlessly blend aesthetics.</li>
              </ul>
              <button className="uppercase h-[50px] w-[205px] bg-basic-600 text-basic-50 text-[20px] font-semibold">learn more</button>
            </div>
          <Image className="w-[35vw] max-w-[600px] h-auto opacity-95 object-cover aspect-video max-[1350px]:hidden" src={about2} alt="Home decor 2 About page"/>
          </div>
        </div>
        <Testimonials noTop={true}/>
        <OurBlog />
        <Sponsors />
    </main>)
  }