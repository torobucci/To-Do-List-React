import styles from '@/components/styles/Header.module.css'
function Header(){
    return(
        <header className={styles.header}>
            <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
        </header>
    )
}
export default Header