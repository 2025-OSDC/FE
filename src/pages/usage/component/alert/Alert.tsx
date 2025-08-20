import CloseIcon from "@assets/svgs/close.svg?react"

const Alert = ({ state }: { state: State }) => {

  const bgColor =
    state === "WARNING" ? `bg-yellow/15` :
      state === "ERROR" ? `bg-red/15` :
        state === "INFO" ? `bg-blue/15` : 'bg-green/15';

  const textColor =
    state === "WARNING" ? `text-yellow` :
      state === "ERROR" ? `text-red` :
        state === "INFO" ? `text-blue` : 'text-green';

  const borderColor =
    state === "WARNING" ? `border-yellow` :
      state === "ERROR" ? `border-red` :
        state === "INFO" ? `border-blue` : 'border-green';

  const text = 
    state === "WARNING" ? `주의가 필요합니다.` :
      state === "ERROR" ? `오류가 발생했습니다.` :
        state === "INFO" ? `정보를 제공합니다.` : '성공햇습니다.';

  return (
    <div className={`flex flex-row justify-between items-center w-full text-start font-light text-[18px] rounded-[8px] px-6 py-3.5 border ${borderColor} ${textColor} ${bgColor}`}>
      {text}
      <CloseIcon className={`w-7 h-7 cursor-pointer`}/>
    </div>
  )
}

export default Alert;