import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, editToDo, updateCompletion } from "./redux/todosSlice";
import style from '@/components/styles/ToDoItem.module.css'

const TodosList = () => {
 const { todos } = useSelector((state) => state.todos)
 const dispatch = useDispatch()
 useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
  return (
    <ul>
      {todos.map((todo) => (
        <li className={style.item} key={todo.id}>
          <div className={style.content}>
            <div className={style.inputs}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(updateCompletion(todo.id))}
              />
              <input type="text" value={todo.title} onChange={(e) =>dispatch(editToDo({title:e.target.value,id:todo.id}))} />
            </div>
            <button type="button" onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default TodosList;
