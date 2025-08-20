export default function Bullet({
  children,
  option,
}: {
  children?: React.ReactNode;
  option?: string;
}) {
  return (
    <div className="flex items-start gap-1.5 sm:gap-2">
      <span className="text-gray text-lg sm:text-xl lg:text-[24px] flex-shrink-0 mt-0.5">•</span>
      <div className="flex flex-wrap items-center gap-1">
        <span className="text-gray text-sm sm:text-base lg:text-[18px] font-semibold">{option}</span>
        <h2 className="text-gray text-sm sm:text-base lg:text-[18px]">{children}</h2>
      </div>
    </div>
  );
}
