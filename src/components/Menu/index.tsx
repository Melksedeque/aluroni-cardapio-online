import styles from './Menu.module.scss'
import logo from 'assets/logo.svg';

export default function Menu() {
    return (
    <nav className={styles.menu}>
        <img src={logo} alt="Logo Aluroni" />
      </nav>
    )
}