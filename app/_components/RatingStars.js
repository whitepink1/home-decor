import { StarIcon } from "@heroicons/react/24/solid";

export default function RatingStars({stars}) {
    const arrayStars = Array.from(Array(stars).keys())
    console.log(arrayStars)
    return(<div className=" flex justify-between w-[170px] pt-[24px]">
        {arrayStars.map((n) => <StarIcon key={n} className="text-yellow-50 h-[24px]"/>)}
    </div>)

}