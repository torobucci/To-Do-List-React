import style from '@/components/styles/ToDoItem.module.css'
const TodoItem = ({ itemProp, handleChange, delToDo, editToDo }) => {
    return (
      <li className={style.item}>
        <div className={style.content}>
       <div className={style.inputs}>
       <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {/* {itemProp.title} */}
        <input type="text" value={itemProp.title} onChange={(e)=>editToDo(e.target.value,itemProp.id)} />
       </div>
        <button type="button" onClick={()=>delToDo(itemProp.id)}>Delete</button>
        </div>
      </li>
    );
  };
  export default TodoItem;
  