export default function FormInput({children, type, d, pH, areaName, value, onChange}){
    return(
    <div className={`flex flex-col justify-between ${d ? "h-[160px]" : "h-[75px]"} w-full`}>
        <label className="text-[16px] text-basic-50 mb-1">{children}</label>
        {d ? <textarea name={areaName} className="h-[130px] p-2" placeholder={pH}/> : <input required name={areaName} className="w-full px-2 leading-[48px] drop-shadow-lg" type={type} placeholder={pH}/>}
    </div>)
}