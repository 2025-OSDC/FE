interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

const Chip = ({ children, className = "" }: ChipProps) => {
  return (
    <div
      className={`bg-gray-blue flex items-center justify-center rounded-lg px-5 py-1.5 text-2xl font-semibold text-white ${className} w-fit`}
    >
      {children}
    </div>
  );
};

export default Chip;
