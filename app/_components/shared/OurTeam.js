import MainPageHeader from "../MainPageHeader";
import MainPagePar from "../MainPagePar";
import TeamMember from "../TeamMember";
import team1 from "@/public/team1.jpg"
import team2 from "@/public/team2.jpg"
import team3 from "@/public/team3.jpg"
import team4 from "@/public/team4.jpg"

export default function OurTeam() {
    const team = [
        {url: team1, name: "Emma Carter", position: "Creative Director"},
        {url: team2, name: "Sophia Bennett", position: "Lead Interior Designer"},
        {url: team3, name: "Olivia Reed", position: "Head of Product Development"},
        {url: team4, name: "Isabella Hayes", position: "Marketing & Branding Manager"},
    ]
    return(<div className="flex flex-col justify-between items-center h-fit min-h-[680px] mb-[60px]">
        <div>
            <MainPageHeader>Our Team</MainPageHeader>
            <MainPagePar>At Haven, our team is a group of passionate designers, craftsmen, and home decor enthusiasts dedicated to bringing beauty and functionality into every space. With a shared love for timeless design and quality craftsmanship, we work together to curate a collection that transforms houses into homes.</MainPagePar>
        </div>
        <div className="grid grid-cols-2 gap-[25px] mx-auto mt-[60px] min-[1400px]:grid-cols-4">
            {team.map((member) => <TeamMember key={member.name} name={member.name} position={member.position} url={member.url}/>)}
        </div>
    </div>)
}