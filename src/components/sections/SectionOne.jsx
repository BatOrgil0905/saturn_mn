import React from 'react';
import { BackGroundOne } from '../images';

const SectionOne = () => {
  return (
    <section className='px-[8%] my-6'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex flex-col w-full lg:w-2/5'>
                <h1 className='mt-12 text-3xl font-normal text-white text-left'>Сансар огторгуйн мэдлэгээ хөгжүүлэх үү?</h1>
                <p className='my-6 text-gray-200'>
                    Монголын хамгийн анхны сансар огторгуйн мэдээ мэдээллийн вебсайт болох Saturn.MN танд туслах болно. Яг одоо хэрэглэгч болоод мэдлэгээ хөгжүүлээрэй.
                </p>
                <button className='w-[175px] px-3 py-2 rounded-3xl text-white cursor-pointer bg-gradient-to-r from-violet-700 to-blue-700'>
                    Бүртгүүлэх
                </button>
                <p className='my-6 text-white'>
                    Мэдээж 100% үнэгүй
                </p>
            </div>
            <BackGroundOne />
        </div>
    </section>
  )
}

export default SectionOne