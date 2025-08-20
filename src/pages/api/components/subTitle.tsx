export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <span className="text-gray-blue text-xl sm:text-2xl lg:text-[30px]">•</span>
      <h2 className="text-gray-blue text-lg sm:text-xl lg:text-[24px] font-medium">{children}</h2>
    </div>
  );
}
