import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.container}>
            <p>xcal &copy; {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;