export default function Bullet({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-5 flex items-center gap-1.5 sm:gap-2 ${className}`}>
      <div className="text-gray flex flex-row flex-wrap items-center gap-1 text-sm font-semibold sm:text-base lg:text-[18px]">
        • {children}
      </div>
    </div>
  );
}
