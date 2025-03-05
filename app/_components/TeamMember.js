import Image from "next/image";
import socials from "../../public/socials.png";

export default function TeamMember({url, name, position}) {
    return(<div className="h-[415px] w-[300px] flex flex-col justify-between items-center">
        <Image width="300" height="300" src={url} alt={name}/>
        <div className="flex flex-col justify-between items-center h-[100px]">
            <div className="text-center">
                <p className="text-[20px] font-medium">{name}</p>
                <p className="text-[16px] text-basic-600/70">{position}</p>
            </div>
            <Image src={socials} alt="Socials"/>
        </div>

        
    </div>)
}