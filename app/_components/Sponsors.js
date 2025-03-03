import Image from "next/image";
import image1 from "../../public/sp1.png";
import image2 from "../../public/sp2.png";
import image3 from "../../public/sp3.png";
import image4 from "../../public/sp4.png";
import image5 from "../../public/sp5.png";

export default function Sponsors() {
    return(<div className="h-[240px] bg-green-100">
        <div className="flex justify-between items-center mx-[312px] h-full">
            <Image className="h-fit" width={0} height={0} src={image1} alt="Interiors"/>
            <Image className="h-fit" width={0} height={0} src={image2} alt="Mininal"/>
            <Image className="h-fit" width={0} height={0} src={image3} alt="Modern House"/>
            <Image className="h-fit" width={0} height={0} src={image4} alt="Vintagge Minimal"/>
            <Image className="h-fit" width={0} height={0} src={image5} alt="Interior"/>
        </div>       
    </div>)
}