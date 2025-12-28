import { Input } from './input';
import type { InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className='relative h-44 w-130 sm:w-250 md:w-380 lg:w-500'>
      <Input
        {...props}
        style={{ paddingLeft: '42px' }}
        className={`h-full w-full pl-42 ${props.className ?? ''}`}
      />
    </div>
  );
}
