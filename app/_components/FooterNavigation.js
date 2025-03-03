import Link from "next/link";

export default function FooterNavigation({children, listOfItems}) {
    return(<div className="flex flex-col justify-start">
        <h5 className="text-[20px] font-semibold pb-[12px]">{children}</h5>
        {listOfItems.map((item) => <Link key={item.name} href={item.url}>{item.name}</Link>)}
    </div>)
}