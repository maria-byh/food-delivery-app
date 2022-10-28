import React from 'react';

import { heroData } from '../utils/Data';

import Delivery from '../images/delivery.png';
import HeroBg from '../images/heroBg.png';


export default function HomeContainer() {
return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
        <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
            <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                <p className='text-base text-orange-500 font-semibold '>Bike Delivery</p>
                <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                    <img src={Delivery} className="w-full h-full object-contain" alt="delivery bike" />
                </div>
            </div>
            <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>
                The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
            </p>
            <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor praesentium numquam explicabo 
                adipisci inventore sapiente molestias, enim distinctio blanditiis aliquid rem pariatur nostrum, 
                provident quo veniam. Eos nisi voluptate animi.</p>
            <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
        </div>
        <div className='py-2 flex items-center flex-1 relative'>
            <img src={HeroBg} className="ml-auto w-full h-420 lg:w-auto lg:h-650 " alt="hero-bg" />

            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap'>
                {heroData && heroData.map((item) => (
                    <div key={item.id} className='lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                        <img className='w-20 lg:w-40 -mt-10 lg:-mt-20' src={item.imageSrc} alt="i1" />
                        <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{item.name}</p>
                        <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{item.decp}</p>
                        <p className='text-sm font-semibold text-headingColor'>
                            <span className='text-xs text-red-600'>$</span> {item.price}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </section>
)
}
