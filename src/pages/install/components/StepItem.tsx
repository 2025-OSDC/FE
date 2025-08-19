import Chip from "../../../components/chip";

interface StepItemProps {
  chip: string;
  title: string;
  children: React.ReactNode;
}

const StepItem = ({ chip, title, children }: StepItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-5 flex items-center gap-4">
        <Chip>{chip}</Chip>
        <p className="text-gray-blue text-2xl font-semibold">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default StepItem;
