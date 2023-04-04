import InputTodo from '@/components/InputTodo'
import TodosList from '@/components/ToDosList';
import { useState } from 'react';
const TodosLogic = () => {
    const [todos, setTodos] = useState([]);
    const handleChange = (id) => {
      setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    };
    function delToDo(id){
      setTodos([
        ...todos.filter(todo =>{
            return todo.id!==id
        })
      ])
    }
    function addToDo(title){
        const newItem = {
            id:todos.length+1,
            title:title,
            completed:false,
        }
      setTodos([...todos, newItem])
    }
    const editToDo =(title,id)=>{
        setTodos(
            todos.map((todo) => {
              if (todo.id === id) {
                todo.title = title;
              }
              return todo;
            })
          );
    }
    return (
      <div>
        <InputTodo addToDo={addToDo} />
        <TodosList todosProps={todos} handleChange={handleChange} delToDo={delToDo} editToDo={editToDo} />
      </div>
    );
  };
  export default TodosLogic;
  