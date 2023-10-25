import React, { useEffect, useState } from 'react';
import SignatureButton from '../ui/Buttons/signature';
import cn from '@site/utils/cn';
import { useHistory, useLocation } from '@docusaurus/router';

const Header: React.FC = () => {
    const [count, setCount] = useState<number | "Kidding 🤣">(0);
    const location = useLocation();
    const history = useHistory();
    const [joinListModal, setJoinListModal] = useState<boolean>(new URLSearchParams(location.search).get("join") === "superlist");

    useEffect(() => {
        setJoinListModal(new URLSearchParams(location.search).get("join") === "superlist")
    }, [location.search])

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
            {joinListModal && <div className={cn("h-full backdrop-blur-lg absolute left-0 right-0 w-100 top-0")} onClick={() => history.push({
                search: "",
            })}>
            </div>}
            <h3 className="text-center text-xl md:text-4xl font-semibold md:mt-6">Build & Deploy your</h3>
            <h1 className="text-center text-[2.2rem] md:text-8xl font-black bg-gradient-to-l from-orange-500 from-[5%] to-[#7834FF] bg-clip-text text-transparent">Super-portfolio.</h1>
            <h3 className="text-center text-xl md:text-4xl font-semibold md:my-6">
                in just
                <span className='ml-2 underline'>
                    {typeof (count) === "number" ? `${count} min` : count}
                </span>
            </h3>
            <SignatureButton className='mx-auto' clickHandler={() => history.push({
                search: "join=superlist",
            })} />
        </header>
    );
}

export default Header