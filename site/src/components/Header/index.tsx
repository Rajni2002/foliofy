import React, { useEffect, useState } from 'react';
import SignatureButton from '../ui/Buttons/signature';
import cn from '@site/utils/cn';
import useSearchParams from '@site/src/hooks/useSearchParams';

const Header: React.FC = () => {
    const [count, setCount] = useState<number | "Kidding 🤣">(0);
    const { searchParams, setParamsValue, removeParamsValue } = useSearchParams()
    // Countdown effect
    useEffect(() => {
        let start = 0;
        // first three numbers from props
        const end = 180
        // if zero, return
        if (start === end) return;

        // find duration per increment
        let totalMilSecDur = 6;
        let incrementTime = (totalMilSecDur / end) * 1000;

        // timer increments start counter 
        // then updates count
        // ends if start reaches end
        let timer = setInterval(() => {
            start += 1;
            setCount(start)
            if (start === end) {
                clearInterval(timer);
                setCount("Kidding 🤣")
                setInterval(() => setCount(1), 2000);
            }
        }, incrementTime);
    }, [])
    return (
        <header className='my-16'>
            {searchParams.get("join") === "superlist" && <div className={cn("h-full backdrop-blur-lg absolute left-0 right-0 w-100 top-0")} onClick={() => { removeParamsValue("join") }}>
            </div>}
            <h3 className="text-center text-xl md:text-4xl font-semibold md:mt-6">Build & Deploy your</h3>
            <h1 className="text-center text-[2.2rem] md:text-8xl font-black bg-gradient-to-l from-orange-500 from-[5%] to-[#7834FF] bg-clip-text text-transparent">Super-portfolio.</h1>
            <h3 className="text-center text-xl md:text-4xl font-semibold md:my-6">
                in just
                <span className='ml-2 underline'>
                    {typeof (count) === "number" ? `${count} min` : count}
                </span>
            </h3>
            <SignatureButton className='mx-auto' clickHandler={() => setParamsValue("join", "superlist")} />
        </header>
    );
}

export default Header