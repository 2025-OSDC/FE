interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-9 w-44 cursor-pointer items-center justify-center rounded-md bg-black text-sm font-normal text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
