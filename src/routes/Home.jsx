import style from '@/components/styles/App.module.css'
import Header from '@/components/Header'
import InputTodo from '@/components/InputTodo'
import TodosList from '@/components/ToDosList'
function Home() {
  return (
    <div className={style.app}>
     <div className={style.todos}>
     <Header />
      <InputTodo />
      <TodosList />
     </div>
    </div>
  )
}

export default Home
