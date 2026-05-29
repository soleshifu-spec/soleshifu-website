import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ink-50 text-ink-950 hover:bg-white',
  secondary: 'border border-white/15 bg-white/10 text-ink-50 hover:bg-white/15',
  ghost: 'text-ink-50 hover:bg-white/10'
};

export function Button({ children, className, variant = 'primary', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-volt-400 focus:ring-offset-2 focus:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
