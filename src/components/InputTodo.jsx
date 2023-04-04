import style from '@/components/styles/InputTodo.module.css'
import { useState } from 'react';
const InputTodo = ({ addToDo }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
        addToDo(title);
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

