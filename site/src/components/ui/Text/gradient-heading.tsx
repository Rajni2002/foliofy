import cn from '@site/utils/cn';
import React, { ReactNode } from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
}

const GradientHeading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ children, className, ...props }, ref) => (
        <h1 className={cn(className, "text-center text-[2.2rem] md:text-8xl font-black bg-gradient-to-l from-orange-500 from-[5%] to-[#7834FF] bg-clip-text text-transparent")} ref={ref} {...props}>
            {children}
        </h1>
    )
)
GradientHeading.displayName = "GradientHeading"

const HeadingSecondary = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ children, className, ...props }, ref) => (
        <h4 className={cn(className, "text-center text-xl md:text-4xl font-semibold md:mt-6")} ref={ref} {...props}>
            {children}
        </h4>
    )
)
HeadingSecondary.displayName = "HeadingSecondary"



export { GradientHeading, HeadingSecondary };
