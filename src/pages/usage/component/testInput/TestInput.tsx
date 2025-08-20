import { useState } from "react";

import WarningIcon from '@assets/svgs/warning.svg?react';
import SuccessIcon from '@assets/svgs/success.svg?react';

const TestInput = ({ initialText = "colbrush" }: { initialText?: string }) => {
  const [text, setText] = useState(initialText);

  return (
    <div className={`w-full flex flex-row gap-6 text-[18px] font-medium items-center`}>
      <input
        className={`${text === 'colbrush' ? `border-green` : `border-deep-red`} w-full outline-0 border px-5 py-3.5 rounded-[8px]`}
        value={text}
        onChange={(e) => setText(e.target.value)} />
      <div>
        {text === 'colbrush' ? (
          <div className={`flex flex-row items-center gap-3 text-green`}>
            <SuccessIcon className={`w-8 h-8`} />
            <p className={`w-fit truncate`}>성공</p>
          </div>
        ) : (
          <div className={`flex flex-row items-center gap-3 text-deep-red`}>
            <WarningIcon className={`w-8 h-8`} />
            <p className={`w-fit truncate`}>오류</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestInput;