import styles from './Header.module.css';

function Header(){
    return(
        <div className={styles.container}>
            <h1 className={styles.xcal}>xcal</h1>
            <span className={styles.beta}>now in beta!</span>
            <div className={styles.clear}></div>
        </div>
    );
}

export default Header;