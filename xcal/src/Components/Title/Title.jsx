import styles from './Title.module.css';

function Title(){
    return(
        <div className={styles.container}>
            <p className={styles.xcal}>xcal</p>
            <br/>
            <p className={styles.under}>your calorie counting buddy</p>
        </div>
    );
}

export default Title;