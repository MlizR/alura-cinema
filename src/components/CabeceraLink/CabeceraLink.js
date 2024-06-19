import { Link } from "react-router-dom";
import styles from "./CabeceraLink.module.css"

function CabeceraLink ( {url, children} ) {
    return(
        // url viene de las props
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabeceraLink;