import React from 'react';
import LogoOne from '../images/logo.svg';
import bg0ne from "../images/bg1.png";
import astronaut from "../images/astronaut.png";
// --Apps
import appOne from "../images/news.png";
import appTwo from "../images/info.png";
import appThree from "../images/moon.png";
import appFour from "../images/camera.png";
import appFive from "../images/rocket-start.png";
import appSix from "../images/cart.png";
import appSeven from '../images/saturn.png';
import appEight from "../images/question.png";
//News
import NewsPic from "../images/main.png";
//banner
import banner from "../images/galaxy.jpg"
//some stuffs
import one from "../images/info1.png";
import two from "../images/info2.png";
import three from "../images/info3.png"

import nextVersion from "../images/version2.png";
import LogoTwo from "../images/logo_group.svg";




export const Logo = () => {
  return (
    <img className='w-[200px]' src={LogoOne} alt="Logo one" />
  )
}

export const BackGroundOne = () => {
    return (
        <img className='w-auto lg:w-2/5 h-auto lg:h-full' src={bg0ne} alt="bg one" />
    )
}

export const AstronautPic = () => {
    return (
        <div className='hidden lg:block'>
            <img className='absolute w-[200px] opacity-20 left-[450px]' src={astronaut} alt="astronaut chillin somewhere in the cosmos" />
        </div>
    )
}

// --Apps
export const AppNews = () => {
    return (
        <>
            <img className='w-[90px] my-4' src={appOne} alt="news" />
            <h1 className='text-lg text-white my-4'>Saturn News</h1>
        </>
    )
}

export const AppWiki = () => {
  return (
    <>
      <img className="w-[90px] my-4" src={appTwo} alt="wiki" />
      <h1 className="text-lg text-white my-4">Saturn Wiki</h1>
    </>
  );
};

export const AppEclipse = () => {
  return (
    <>
      <img className="w-[90px] my-4" src={appThree} alt="eclipse" />
      <h1 className="text-lg text-white my-4">Saturn Eclipse</h1>
    </>
  );
};

export const AppMedia = () => {
  return (
    <>
      <img className="w-[90px] my-4" src={appFour} alt="media" />
      <h1 className="text-lg text-white my-4">Saturn Media</h1>
    </>
  );
};

export const AppJourney = () => {
  return (
    <>
      <img className="w-[90px] my-4" src={appFive} alt="news" />
      <h1 className="text-lg text-white my-4">Saturn Journey</h1>
    </>
  );
};

export const AppShop = () => {
  return (
    <>
      <img className="w-[90px] my-4" src={appSix} alt="shop" />
      <h1 className="text-lg text-white my-4">Saturn Shop</h1>
    </>
  );
};

export const AppPlus = () => {
  return (
    <>
      <img className="w-[90px] my-4" src={appSeven} alt="plus" />
      <h1 className="text-lg text-white my-4">Saturn Plus</h1>
    </>
  );
};

export const AppQuestion = () => {
  return (
    <>
      <img className="w-[90px] my-4" src={appEight} alt="q&a" />
      <h1 className="text-lg text-white my-4">Saturn Q&A</h1>
    </>
  );
};

export const MainPic = () => {
    return(
        <img className='w-full h-full rounded-xl' src={NewsPic} alt="news pic" />
    )
}

export const BannerPic = () => {
    return (
      <img
        className="my-6 bg-center bg-cover relative bg-fixed"
        src={banner}
        alt="galaxy banner"
      />
    );
}

export const InfoOne = ()  => {
    return(
        <img className='my-5 lg:my-2 w-1/2 lg:w-1/3 h-auto lg:h-full' src={one} alt="one" />
    )
}

export const InfoTwo = () => {
  return (
    <img
      className="my-5 lg:my-2 w-1/2 lg:w-1/3 h-auto lg:h-full"
      src={two}
      alt="one"
    />
  );
};

export const InfoThree = () => {
  return (
    <img
      className="my-5 lg:my-2 w-1/2 lg:w-1/3 h-auto lg:h-full"
      src={three}
      alt="one"
    />
  );
};

export const VersionTwo = () => {
    return(
        <img className='w-full md:w-1/2 h-full' src={nextVersion} alt="next version" />
    )
}

export const GroupLogo = () => {
    return(
        <img src={LogoTwo} alt="logo group" />
    )
}