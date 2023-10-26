import React, { useEffect, useState } from 'react';
import { SignatureButton } from '../ui/Buttons/signature';
import { useHistory, useLocation } from '@docusaurus/router';
import JoinSuperList from '../JoinSuperList';
import { GradientHeading, HeadingSecondary } from '../ui/Text/gradient-heading';

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
        <header className='my-16 text-center'>
            <JoinSuperList isOpen={joinListModal} visiblityHandler={() => history.push({
                search: "",
            })} />
            <HeadingSecondary>Build & Deploy your</HeadingSecondary>
            <GradientHeading>Super-portfolio.</GradientHeading>
            <HeadingSecondary>
                in just
                <span className='ml-2 underline'>
                    {typeof (count) === "number" ? `${count} min` : count}
                </span>
            </HeadingSecondary>
            <SignatureButton className='mt-5' onClick={() => history.push({
                search: "join=superlist",
            })} />
        </header>
    );
}

export default Header