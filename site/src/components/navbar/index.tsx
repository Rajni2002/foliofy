import React from 'react';
import Logo from "@site/static/img/logo-foliofy.svg"
import Link from '@docusaurus/Link';

const Navbar: React.FC = () => {

    return (
        <div className='flex justify-between' onClick={()=>{
            console.log("ckenfmn");
        }}>
            <Logo className="h-8 w-40 cursor-pointer" />
            <Link href='https://github.com/Rajni2002/foliofy' className="cursor-pointer">
                <img src="/img/social/github-hero.svg" alt='github-icon' />
            </Link>
        </div>
    );
};

export default Navbar;
