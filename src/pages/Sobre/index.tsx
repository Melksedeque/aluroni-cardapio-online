import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function Sobre() {
    return (
        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>
            <div className={styles.sobre}></div>
        </section>
    )
}