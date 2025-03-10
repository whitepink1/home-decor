export default function ContactDetail({children, p1, p2}) {
    return(<div className="flex flex-col justify-end items-start mx-4 mb-4">
        <p className="text-[20px] font-semibold text-basic-50">{children}</p>
        <p className="text-[16px]  text-basic-50">{p1}</p>
        <p className="text-[16px]  text-basic-50">{p2}</p>
    </div>)
}