import React from 'react';
import { MenuMobile, MenuToggle, MenuDesktop } from './menus/Menu';
import { Logo } from './images';

const Header = () => {
    function openResMenu(){
        const myOpenMenu = document.querySelector(".myOpenMenu");
        myOpenMenu.style.width = "40%";
    }
    function closeMenu(){
        const myOpenMenu = document.querySelector(".myOpenMenu");
        myOpenMenu.style.width = "0%";
    }
    return (
        <header className='px-[6%] my-12'>
            <div className='myOpenMenu'>
                <div className='sticky top-0 z-40'>
                    <a href="javascript:void(0)" className='absolute right-1 pr-4 pt-2 text-4xl' onClick={closeMenu}>x</a>
                </div>
                <MenuMobile/>
            </div>

            <div className='flex items-center justify-between'>
                <label htmlFor="menu-toggle" onClick={openResMenu} className="block cursor-pointer lg:hidden">
                    <MenuToggle/>
                </label>
                <input className='hidden duration-300' type="checkbox" id='menu-toggle' />
                <Logo />
                <div className='block lg:hidden'></div>
                <MenuDesktop />
            </div>
        </header>
    )
}

export default Header