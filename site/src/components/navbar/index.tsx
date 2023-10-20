import React from 'react';
import Logo from "@site/static/img/logo-foliofy.svg"

const Navbar: React.FC = () => {

    return (
        <div className='flex justify-between'>
            <Logo className="h-8 w-40 cursor-pointer" />
            <img src="/img/social/github-hero.svg" alt='github-icon' />
        </div>
    );
};

export default Navbar;
