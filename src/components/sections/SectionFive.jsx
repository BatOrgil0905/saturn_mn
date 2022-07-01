import React from 'react';
import { VersionTwo } from '../images';

const SectionFive = () => {
  return (
    <section className="relative h-[100vh]">
        <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center justify-center">
                <VersionTwo />
                <p className="my-8 lg:my-12 text-xl text-center text-white font-normal">ИЛҮҮ ХУРДАН, ИЛҮҮ ЗАГВАРЛАГ</p>
                <button className="w-[175px] px-3 py-2 rounded-3xl text-white cursor-pointer bg-gradient-to-r from-violet-700 to-blue-700">
                    Дэлгэрэнгүй
                </button>
            </div>        
        </div>
    </section>
  )
}

export default SectionFive