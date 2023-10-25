import React from 'react';
import Logo from "@site/static/img/logo-foliofy.svg"
import Link from '@docusaurus/Link';

const Navbar: React.FC = () => {

    return (
        <div className='flex justify-between'>
            <Logo className="h-6 w-[7rem] md:h-8 md:w-40 cursor-pointer" />
            <Link href='https://github.com/Rajni2002/foliofy' className="cursor-pointer">
                <img src="/img/social/github-hero.svg" alt='github-icon' className='h-6'/>
            </Link>
        </div>
    );
};

export default Navbar;
