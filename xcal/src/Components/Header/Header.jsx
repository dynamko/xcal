import styles from './Header.module.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className={styles.container}>
            <span className={styles.navButton}>about</span>
            <span className={styles.navButton}>counter</span>
            <Link to="/">
                <h1 className={styles.xcal}>xcal</h1>
                <span className={styles.beta}>now in beta!</span>
                <div className={styles.clear}></div>
            </Link>
            
        </div>
    );
}

export default Header;