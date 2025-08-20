export default function Bullet({
  children,
  option,
}: {
  children?: React.ReactNode;
  option?: string;
}) {
  return (
    <div className="mt-5 flex items-center gap-1.5 sm:gap-2">
      <span className="text-gray flex-shrink-0 text-lg sm:text-xl lg:text-[24px]">
        •
      </span>
      <div className="flex flex-wrap items-center gap-1">
        <span className="text-gray text-sm font-semibold sm:text-base lg:text-[18px]">
          {option}
        </span>
        <h2 className="text-gray text-sm sm:text-base lg:text-[18px]">
          {children}
        </h2>
      </div>
    </div>
  );
}
