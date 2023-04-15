import styles from './banner.module.css';
import Paragrafo from './ui/paragrafo';

export default function Banner() {
    return (
        <div className={styles.main}>
            Questo è un banner
            <Paragrafo styles={styles}/>
        </div>
    );
}