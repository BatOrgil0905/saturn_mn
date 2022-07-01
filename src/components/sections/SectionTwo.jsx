import React from 'react';
import { SaturnNews, SaturnWiki, SaturnEclipse, SaturnMedia, SaturnJourney, SaturnShop, SaturnPlus, SaturnQuestion } from '../Apps';

const SectionTwo = () => {
  return (
    <section className='px-[6%] mt-28 mb-8'>
        <h1 className='text-3xl text-white text-center my-6'>Saturn Apps</h1>
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
                <SaturnNews/>
                <SaturnWiki/>
                <SaturnEclipse/>
                <SaturnMedia/>
                <SaturnJourney/>
                <SaturnShop/>
                <SaturnPlus/>
                <SaturnQuestion/>
            </div>
        </div>
    </section>
  )
}

export default SectionTwo