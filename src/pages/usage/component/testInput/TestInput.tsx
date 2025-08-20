import { useState } from "react";

import WarningIcon from '@assets/svgs/warning.svg?react';
import SuccessIcon from '@assets/svgs/success.svg?react';

const TestInput = ({ initialText = "colbrush" }: { initialText?: string }) => {
  const [text, setText] = useState(initialText);

  return (
    <div className={`w-full flex flex-row gap-6 max-lg:gap-4 lg:text-[18px] max-lg:text-[16px] font-medium items-center`}>
      <input
        className={`${text === 'colbrush' ? `border-green` : `border-deep-red`} w-full outline-0 border px-5 py-3.5 max-lg:px-4 max-lg:py-3 rounded-[8px]`}
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="colbrush"/>
      <div>
        {text === 'colbrush' ? (
          <div className={`flex flex-row items-center gap-3 max-lg:gap-2 text-green`}>
            <SuccessIcon className={`w-8 h-8 max-lg:w-6 max-lg:h-6`} />
            <p className={`w-fit truncate`}>성공</p>
          </div>
        ) : (
          <div className={`flex flex-row items-center gap-3 max-lg:gap-2 text-deep-red`}>
            <WarningIcon className={`w-8 h-8 max-lg:w-6 max-lg:h-6`} />
            <p className={`w-fit truncate`}>오류</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestInput;