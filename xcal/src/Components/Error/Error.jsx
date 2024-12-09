import { Link } from "react-router-dom";
import styles from './Error.module.css';

function Error(){
    return(
        <div>
            404 not found<br/>
            <Link to="/" >To home</Link>
        </div>
    );
}

export default Error;