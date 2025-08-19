import WarningIcon from '@assets/svgs/warning.svg?react';
import ErrorIcon from '@assets/svgs/error.svg?react';
import InfoIcon from '@assets/svgs/info.svg?react';
import SuccessIcon from '@assets/svgs/success.svg?react';

type State = "WARNING" | "ERROR" | "INFO" | "SUCCESS";

const CustomTooltip = ({
  state
}: { state: State }) => {

  const text =
    state === "WARNING" ? "주의가 필요합니다." :
      state === "ERROR" ? "오류가 발생했습니다." :
        state === "INFO" ? "정보를 제공합니다." : "성공했습니다.";

  return (
    <div className={`flex flex-col items-center gap-5 w-full`}>
      <div className={`
        ${state === "WARNING" ? "bg-yellow" : `
        ${state === "ERROR" ? "bg-error" : `
        ${state === "INFO" ? "bg-info" : `bg-green`}`}`}
        relative px-6.5 py-6 rounded-[6px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] w-full`}>
        <p className={`text-[20px] text-white font-medium text-start`}>{text}</p>
        <div className={`
          ${state === "WARNING" ? "bg-yellow" : `
          ${state === "ERROR" ? "bg-error" : `
          ${state === "INFO" ? "bg-info" : `bg-green`}`}`} 
          absolute left-[50%] -translate-x-1/2 -bottom-[10%] rotate-45 w-4 h-4`} />
      </div>

      {state === "WARNING" ? (
        <WarningIcon
          className={`text-yellow w-10 h-10`} />
      ) : state === "ERROR" ? (
        <ErrorIcon
          className={`text-error w-10 h-10`} />
      ) : state === "INFO" ? (
        <InfoIcon
          className={`text-info w-10 h-10`} />
      ) : (
        <SuccessIcon
          className={`text-green w-10 h-10`} />
      )}

    </div>
  )
}

export default CustomTooltip;
