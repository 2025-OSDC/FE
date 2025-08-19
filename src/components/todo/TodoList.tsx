type State = "시작 전" | "진행 중" | "완료";

const TodoList = ({ state }: { state: State }) => {

  const [rootStyle, setRootStyle] = useState<CSSStyleDeclaration>(getComputedStyle(document.documentElement))

  const color = state === "시작 전" ? `${rootStyle.getPropertyValue('--color-purple')}` :
    state === "진행 중" ? `${rootStyle.getPropertyValue('--color-yellow')}` : `${rootStyle.getPropertyValue('--color-green')}`

  return (
    <div className={`rounded-[16px] bg-[#F5F5F5]`}>

    </div>
  )
}

export default TodoList;