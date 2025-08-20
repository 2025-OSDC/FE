import WarningIcon from '@assets/svgs/warning.svg?react';
import ErrorIcon from '@assets/svgs/error.svg?react';
import InfoIcon from '@assets/svgs/info.svg?react';
import SuccessIcon from '@assets/svgs/success.svg?react';
import { useState } from 'react';

const CustomTooltip = ({
  state
}: { state: State }) => {

  const [isHover, setIsHover] = useState(false);

  const text =
    state === "WARNING" ? "주의가 필요합니다." :
      state === "ERROR" ? "오류가 발생했습니다." :
        state === "INFO" ? "정보를 제공합니다." : "성공했습니다.";

  const bgColor =
    state === "WARNING" ? "bg-yellow" :
      state === "ERROR" ? "bg-deep-red" :
        state === "INFO" ? "bg-deep-blue" : `bg-green`

  return (
    <div className={`flex flex-col items-center w-full`}>
      <div
        className={`
          ${isHover ? `scale-110` : ``}
          ${bgColor} relative px-6.5 py-6 max-lg:px-4.5 max-lg:py-4 rounded-[6px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] w-full transition-all ease-out duration-300`}
        onMouseOverCapture={() => setIsHover(true)}
        onMouseOutCapture={() => setIsHover(false)}>
        <p className={`text-[20px] max-lg:text-[16px] text-white font-medium text-start`}>{text}</p>
        <div className={`${bgColor} absolute left-[50%] -translate-x-1/2 -bottom-[10%] rotate-45 w-4 h-4`} />
      </div>

      <div
        className={`pt-5 max-lg:pt-4`}
        onMouseOverCapture={() => setIsHover(true)}
        onMouseOutCapture={() => setIsHover(false)}>
        {state === "WARNING" ? (
          <WarningIcon
            className={`text-yellow w-10 h-10 max-lg:w-8 max-lg:h-8`} />
        ) : state === "ERROR" ? (
          <ErrorIcon
            className={`text-deep-red w-10 h-10 max-lg:w-8 max-lg:h-8`} />
        ) : state === "INFO" ? (
          <InfoIcon
            className={`text-deep-blue w-10 h-10 max-lg:w-8 max-lg:h-8`} />
        ) : (
          <SuccessIcon
            className={`text-green w-10 h-10 max-lg:w-8 max-lg:h-8`} />
        )}
      </div>
    </div>
  )
}

export default CustomTooltip;
