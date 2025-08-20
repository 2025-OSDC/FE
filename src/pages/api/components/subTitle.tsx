export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-blue text-[30px]">•</span>
      <h2 className="text-gray-blue text-[24px] font-medium">{children}</h2>
    </div>
  );
}
