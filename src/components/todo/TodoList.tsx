import { useTheme } from "colbrush";
import { useEffect, useState } from "react";
import Todo from "./Todo";

type State = "시작 전" | "진행 중" | "완료";

type Todo = {
  title: string;
  content: string;
  number: number;
}

type TodoListProps = {
  state: State;
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({
  state,
  todos
}) => {

  const theme = useTheme().theme;

  const [rootStyle, setRootStyle] = useState<CSSStyleDeclaration>(getComputedStyle(document.documentElement))

  useEffect(() => {
    setRootStyle(getComputedStyle(document.documentElement));
  }, [theme])

  const color = state === "시작 전" ? `${rootStyle.getPropertyValue('--color-purple')}` :
    state === "진행 중" ? `${rootStyle.getPropertyValue('--color-yellow')}` : `${rootStyle.getPropertyValue('--color-light-green')}`

  return (
    <div className={`flex flex-col gap-4 rounded-[16px] bg-[#F5F5F5] w-full h-full p-4`}>
      <div className={`flex flex-row gap-2.5 items-center`}>
        <div className={`flex flex-row gap-2 items-center`}>
          <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }} />
          <p className={`text-start text-[16px]`}>{state}</p>
        </div>
        <div className={`w-5 h-5 bg-[#D8D8D8] rounded-full text-[12px] text-[#625F6D]`}>{todos.length}</div>
      </div>
      {todos.map((todo, index) => (
          <Todo
            key={index} 
            state={state} 
            title={todo.title} 
            content={todo.content} 
            number={todo.number}/>
        ))}
    </div>
  )
}

export default TodoList;
