import React from 'react';
import { FooterMenu } from '../menus/Menu';
import { GroupLogo } from '../images';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center">
        <div>
          <FooterMenu />
        </div>
        <div className="my-2">
          <GroupLogo />
        </div>
        <div className="my-4">
          <p className="text-xs lg:text-sm font-light text-center text-white">
            © Saturn.MN Group. Зохиогчийн эрх хуулиар хамгаалагдсан. 2014-2022
            он.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer