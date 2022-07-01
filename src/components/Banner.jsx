import React from 'react';
import { BannerPic } from './images';

const Banner = () => {
  return (
    <div className='my-6 bg-center bg-cover relative bg-fixed bg-[url("../images/galaxy.jpg")]'>
        <div className='absolute bg-black opacity-60 w-full h-full top-0 left-0 z-10'></div>
        <h1 className='z-10 py-24 relative text-xl text-white text-center'>Астрономи бол хүн бүрийн заавал судлах хэрэгтэй шинэжлэх ухаануудын нэг юм.</h1>
    </div>
  )
}

export default Banner