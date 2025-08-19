interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const FeatureItem = ({ icon, title, children }: FeatureItemProps) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-3.5">
      <div className="flex flex-row items-center gap-4.5">
        {icon}
        <p className="text-gray-blue text-2xl font-semibold">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default FeatureItem;
