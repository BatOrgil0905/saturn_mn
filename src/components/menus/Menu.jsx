import React from 'react'

export const MenuMobile = () => {
  return (
    <div className="flex flex-col mt-6">
      <ul
        className="!my-auto block flex flex-col items-start font-light text-[8px]"
        id="menu"
      >
        <li className="w-full mt-8 mb-2 text-white text-[15px] md:text-lg py-2 px-4 cursor-pointer bg-gradient-to-r from-violet-700 to-blue-700 duration-300 hover:bg-gradient-to-r hover:from-violet-800 hover:to-blue-800">Нэвтрэх</li>
        <li className='text-white text-[15px] md:text-lg py-2 px-4 cursor-pointer duration-300 hover:text-blue-600'>Эхлэл</li>
        <li className='text-white text-[15px] md:text-lg py-2 px-4 cursor-pointer duration-300 hover:text-blue-600'>Мэдээ</li>
        <li className='text-white text-[15px] md:text-lg py-2 px-4 cursor-pointer duration-300 hover:text-blue-600'>Бидний тухай</li>
        <li className='text-white text-[15px] md:text-lg py-2 px-4 cursor-pointer duration-300 hover:text-blue-600'>Холбоо барих</li>
      </ul>
    </div>
  );
}

export const MenuToggle = () => {
    return (
        <div className='cursor-pointer block lg:hidden'>
            <div className='w-[30px] my-1.5 h-0.5 bg-white'></div>
            <div className='w-[30px] my-1.5 h-0.5 bg-white'></div>
            <div className='w-[30px] my-1.5 h-0.5 bg-white'></div>
        </div>
    )
}

export const MenuDesktop = () => {
    return (
      <div className="hidden lg:block">
        <ul className="flex mx-4">
          <li className="px-4 py-2 rounded-3xl text-white cursor-pointer duration-300 hover:text-blue-600">
            Эхлэл
          </li>
          <li className="px-4 py-2 rounded-3xl text-white cursor-pointer duration-300 hover:text-blue-600">
            Мэдээ
          </li>
          <li className="px-4 py-2 rounded-3xl text-white cursor-pointer duration-300 hover:text-blue-600">
            Бидний тухай
          </li>
          <li class="px-4 py-2 rounded-3xl text-white cursor-pointer bg-gradient-to-r from-violet-700 to-blue-700">
            Нэвтрэх
          </li>
        </ul>
      </div>
    );
}

export const FooterMenu = () => {
    return (
      <ul className="flex flex-row items-center justify-center my-6 mx-2">
        <li className="font-light text-md cursor-pointer text-white px-2">
          Холбоо барих
        </li>
        <li className="font-light text-md cursor-pointer text-white px-2">
          Бидний тухай
        </li>
        <li className="font-light text-md cursor-pointer text-white px-2">
          Үйлчилгээний нөхцөл
        </li>
      </ul>
    );
}