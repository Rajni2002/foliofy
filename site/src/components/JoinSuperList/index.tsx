import React from 'react';
import { HeadingSecondary, GradientHeading } from '../ui/Text/gradient-heading';
import { Input, Textarea } from '../ui/Input';
import CancelIcon from "@site/static/icons/cancel.svg"

type JoinSuperListProps = {
    isOpen: boolean
    visiblityHandler: () => void
}

const JoinSuperList = ({ isOpen, visiblityHandler }: JoinSuperListProps): JSX.Element => {
    return (
        isOpen && <div className="h-fit backdrop-blur-lg absolute left-0 right-0 w-100 top-0 md:py-2">
            <div className='relative w-full md:w-4/12 h-screen md:border-[.1px] md:border-gray-400 md:rounded-2xl mx-auto px-4 py-2' style={{
                background: "url(/background/carvan.png) left bottom no-repeat, url(/background/stars.png) right bottom no-repeat",
                backgroundSize: "contain, cover"
            }}>
                <CancelIcon className='absolute top-2 right-2 cursor-pointer w-4 h-4 md:w-5 md:h-5' onClick={visiblityHandler}/>
                <HeadingSecondary>
                    You are
                </HeadingSecondary>
                <GradientHeading className='font-semibold'>
                    Super
                </GradientHeading>
                <p className='text-gray-400 mt-5 mx-4 text-xs md:text-lg'>
                    About to release the stable version of the foliofy.
                    Be the first one to use it
                </p>
                <Input placeholder='Email' required />
                <Textarea placeholder='Feedbacks or reviews' rows={5} />
            </div>
        </div>
    );
};

export default JoinSuperList;
