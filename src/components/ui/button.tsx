type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className='h-48 w-full rounded-full bg-[#C12116] text-white hover:cursor-pointer'
    ></button>
  );
}
