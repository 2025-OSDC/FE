import { useTheme } from "colbrush";
import { useEffect, useState } from "react";

interface TodoProps {
  state: "시작 전" | "진행 중" | "완료",
  title: string,
  content: string,
  number: number,
}

const Todo: React.FC<TodoProps> = ({
  state,
  title,
  content,
  number,
}) => {

  const theme = useTheme().theme;
  const [rootStyle, setRootStyle] = useState<CSSStyleDeclaration>(getComputedStyle(document.documentElement))

  const bgColor = state === "시작 전" ? `${rootStyle.getPropertyValue('--color-purple')}` :
    state === "진행 중" ? `${rootStyle.getPropertyValue('--color-yellow')}` : `${rootStyle.getPropertyValue('--color-green')}`

  useEffect(() => {
    setRootStyle(getComputedStyle(document.documentElement))
  }, [theme])


  return (
    <div className={`rounded-[16px] w-full px-5 py-4 flex flex-col items-start gap-2`}>
      <div className={`text-[12px] py-1 px-2 w-fit rounded-[4px] bg-white`} style={{ backgroundColor: `${bgColor}33`, color: bgColor }}>
        {number}순위
      </div>
      <div className={`flex flex-col`}>
        <p className={`text-[18px] text-start`}>{title}</p>
        <p className={`text-[12px] text-start text-[#787486]`}>{content}</p>
      </div>
    </div>
  )
}

export default Todo;