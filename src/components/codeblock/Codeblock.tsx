interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const CodeBlock = ({ children, className = "" }: CodeBlockProps) => {
  return (
    <div
      className={`flex w-full flex-col items-start justify-start gap-1.5 self-stretch rounded-2xl bg-neutral-900 px-8 py-6 ${className}`}
    >
      <div className="flex w-full flex-col items-start justify-center gap-2.5">
        <code>{children}</code>
      </div>
    </div>
  );
};

export default CodeBlock;
