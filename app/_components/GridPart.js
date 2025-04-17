import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function GridPart({prop, children, quantity, url, link}) {
    return(<div className={`flex flex-col justify-end h-full w-full  ${url} bg-cover ${prop}`}>
        <Link href={`${link}`} className='flex justify-between mx-[24px] mb-[24px] '>
            <div>
                <h4 className='text-basic-50 text-[20px] font-bold'>{children}</h4>
                <p className='text-basic-50 text-[16px]'>{quantity} products</p>
            </div>
            <button className='bg-basic-50 rounded-full h-[40px] w-[40px]'><ArrowRightIcon className='h-[25px] m-auto'/></button>  
        </Link>
    </div>)
}