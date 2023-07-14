import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '../utils/utils';

const buttonVariants = cva(
    [
        'w-max',
        'flex',
        'gap-2',
        'items-center',
        'rounded-md',
        'outline-0',
        'active:scale-95',
        'active:shadow-inner',
    ],
    {
        variants: {
            variant: {
                highlight: ['bg-btnHighlight', 'text-highlight'],
                primary: ['bg-cardPrimary', 'text-primary', 'font-semibold'],
            },
            sizes: {
                small: ['text-xs', 'py-2', 'px-4'],
            },
        },
        defaultVariants: {
            variant: 'highlight',
            sizes: 'small',
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ variant, sizes, className, children }) => {
    return (
        <button className={cn(buttonVariants({ variant, sizes, className }))}>
            {children}
        </button>
    );
};

export default Button;