import style from '@/components/styles/InputTodo.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './redux/todosSlice';
const InputTodo = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
        dispatch(addToDo(title));
        setTitle('');
        setMessage('');
      } else {
        setMessage('Please add item.');
      }
  };
  return (
    <>
    <form onSubmit={handleSubmit} className={style["form-container"]}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        className={style["input-text"]}
      />
      <button className={style["input-submit"]}>Submit</button>
    </form>
    {message ? <span className={style["submit-warning"]}>{message}</span>:''}
    </>
  );
};
export default InputTodo;

