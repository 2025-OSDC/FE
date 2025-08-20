export default function Bullet({
  children,
  option,
}: {
  children?: React.ReactNode;
  option?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray text-[24px]">•</span>
      <span className="text-gray text-[18px] font-semibold">{option}</span>
      <h2 className="text-gray text-[18px]">{children}</h2>
    </div>
  );
}
