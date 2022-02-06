import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export const Input = ({
  className,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => (
  <input
    className={clsx(
      'w-full rounded-lg px-4 py-2 bg-white outline outline-1 outline-slate-300 focus:ring-slate-500 focus:ring-2',
      className
    )}
    {...props}
  />
);
