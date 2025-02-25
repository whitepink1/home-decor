export default function StrengthComponent({children, name, icon}) {
    return(
    <div className="flex flex-col justify-start text-center pt-[55px] min-w-[300px] max-w-[350px]">
        {icon}
        <h4 className="text-basic-50 font-semibold text-[24px] py-[10px]">{name}</h4>
        <p className="text-basic-50 text-[16px] w-auto">{children}</p>
    </div>)
}