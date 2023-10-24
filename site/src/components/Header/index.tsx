import React from 'react';

export default function Header() {
    return (
        <header className='my-16' onClick={()=>{
            console.log("ckenfmn");
        }}>
            <h3 className="text-center text-xl md:text-4xl font-semibold md:mt-6">Build & Deploy your</h3>
            <h1 className="text-center text-[2rem] md:text-8xl font-black bg-gradient-to-l from-orange-500 from-[5%] to-[#7834FF] bg-clip-text text-transparent">Super-portfolio.</h1>
            <h3 className="text-center text-xl md:text-4xl font-semibold md:my-6">
                in just
                <i className='ml-3 underline'>
                    60 sec
                </i>
            </h3>
        </header>
    );
}

