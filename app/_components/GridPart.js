import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function GridPart({prop, children, quantity, url}) {
    return(<div id={prop} className={`flex flex-col justify-end h-full w-full  ${url} bg-cover`}>
        <div className='flex justify-between mx-[24px] mb-[24px] '>
            <div>
                <h4 className='text-basic-50 text-[20px] font-bold'>{children}</h4>
                <p className='text-basic-50 text-[16px]'>{quantity} products</p>
            </div>
            <button className='bg-basic-50 rounded-full h-[40px] w-[40px]'><ArrowRightIcon className='h-[25px] m-auto'/></button>  
        </div>
    </div>)
}