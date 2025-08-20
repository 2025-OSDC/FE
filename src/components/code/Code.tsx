interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

const Code = ({ children, className = "" }: InlineCodeProps) => {
  return (
    <code
      className={`bg-light-gray rounded-lg px-3 py-1.5 text-lg font-normal ${className}`}
    >
      {children}
    </code>
  );
};

export default Code;
