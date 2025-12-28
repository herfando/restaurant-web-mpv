type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className='h-48 w-full rounded-2xl border border-[#D5D7DA] px-12 py-10'
    ></input>
  );
}

export { Input };
