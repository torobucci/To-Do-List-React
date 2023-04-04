import style from '@/components/styles/App.module.css'
import Header from '@/components/Header'
import TodosLogic from '@/components/ToDosLogic'
function Home() {
  return (
    <div className={style.app}>
     <div className={style.todos}>
     <Header />
      <TodosLogic />
     </div>
    </div>
  )
}

export default Home
