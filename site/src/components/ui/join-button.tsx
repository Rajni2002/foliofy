import cn from '@site/utils/cn';
import React from 'react';

type JoinButtonProps = {
    isLoading?: Boolean
    isSubmitted?: Boolean
    disabled?: Boolean
    onClick?: () => void
}

const JoinButton = ({ isLoading = false, isSubmitted = false, disabled = false, onClick = () => { } }: JoinButtonProps): JSX.Element => {
    return (
        <button onClick={onClick} className={cn('mx-auto my-10 h-fit w-fit font-semibold bg-black rounded-[5rem] text-gray-400', disabled && "shadow-[0px_0px_50px_10px_white] text-white", !isLoading && "px-4 py-3 border-[1px] border-gray-600")}>
            {isLoading ?
                <img className='mx-auto animate-pulse' src='/img/smile.svg' alt='Loading svg' /> :
                <span className="bg-gradient-to-l from-orange-400 from-[5%] to-[#7834FF] bg-clip-text text-transparent">
                    Join the Super List
                </span>
            }
        </button>
    );
};

export default JoinButton;
