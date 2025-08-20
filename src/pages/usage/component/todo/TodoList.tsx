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

  const color = 
    state === "시작 전" ? `bg-purple` :
    state === "진행 중" ? `bg-yellow` : `bg-light-green`

  return (
    <div className={`flex flex-col gap-4 rounded-[16px] bg-[#F5F5F5] w-full h-full p-4`}>
      <div className={`flex flex-row gap-2.5 items-center`}>
        <div className={`flex flex-row gap-2 items-center`}>
          <div className={`lg:w-2 lg:h-2 max-lg:w-1.5 max-lg:h-1.5 rounded-full ${color}`} />
          <p className={`text-start lg:text-[16px] max-lg:text-[14px]`}>{state}</p>
        </div>
        <div className={`w-5 h-5 max-lg:w-4 max-lg:h-4 bg-[#D8D8D8] rounded-full text-[12px] max-lg:text-[10px]  text-[#625F6D]`}>{todos.length}</div>
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          state={state}
          title={todo.title}
          content={todo.content}
          number={todo.number} />
      ))}
    </div>
  )
}

export default TodoList;
