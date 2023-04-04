import TodoItem from '@/components/ToDoItem';
const TodosList = ({ todosProps, handleChange, delToDo, editToDo}) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem
            key={todo.id}
            itemProp={todo}
            handleChange={handleChange}
            delToDo={delToDo}
            editToDo={editToDo}
          />
        ))}
      </ul>
    );
  };
  export default TodosList;
  