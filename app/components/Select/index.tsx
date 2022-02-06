import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export const Select = (
  props: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) => (
  <select
    className="w-full rounded-lg px-4 py-2 bg-white outline outline-1 outline-slate-300 disabled:outline-slate-200 disabled:text-slate-400 focus:ring-slate-500 focus:ring-2"
    {...props}
  />
);
