import React from 'react';
import cn from '@site/utils/cn';
import { cva, type VariantProps } from "class-variance-authority"

const signatureButtonVariants = cva(
    "cursor-pointer font-bold border-[1px] py-1 px-4 rounded-2xl border-gray-700 w-fit transition duration-500",
    {
        variants: {
            mode: {
                dark: "bg-black hover:shadow-[0px_0px_40px_10px_#888888]",
                light: "bg-gray-200 hover:shadow-[0px_0px_40px_10px_#7834FF]"
            }
        },
        defaultVariants: {
            mode: "dark"
        }
    },
)


interface SignatureButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof signatureButtonVariants> { }

const SignatureButton = React.forwardRef<HTMLButtonElement, SignatureButtonProps>(
    ({ mode = "dark", children = "Be the first one", className = "", ...props }, ref) => {
        return (
            <button
                className={cn(signatureButtonVariants({ mode, className }))}
                {...props}
                ref={ref}
            >
                <span className='bg-gradient-to-l from-orange-500 from-[5%] to-[#7834FF] bg-clip-text text-transparent'>
                    {children}
                </span>
                <span className='ml-2'>
                    🚀
                </span>
            </button>
        );
    }
)
SignatureButton.displayName = "SignatureButton"


export { SignatureButton, signatureButtonVariants };
