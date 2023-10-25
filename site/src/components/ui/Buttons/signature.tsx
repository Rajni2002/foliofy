import React from 'react';
import cn from '@site/utils/cn';

type SignatureButtonProps = {
    className?: string
    mode?: "dark" | "light",
    children?: string
    clickHandler?: () => void
}

const SignatureButton = ({ mode = "light", children = "Be the first one", className = "", clickHandler }: SignatureButtonProps): JSX.Element => {
    return (
        <div
            className={cn("cursor-pointer font-bold border-[1px] py-1 px-4 rounded-2xl border-gray-700 w-fit transition duration-500", className, mode === "light" ? "bg-black hover:shadow-[0px_0px_40px_10px_#888888]" : "bg-gray-200 hover:shadow-[0px_0px_40px_10px_#7834FF]")}
            onClick={clickHandler}>
            <span className='bg-gradient-to-l from-orange-500 from-[5%] to-[#7834FF] bg-clip-text text-transparent'>
                {children}
            </span> 🚀
        </div>
    );
};

export default SignatureButton;
