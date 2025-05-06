import styles from './Menu.module.scss'
import logo from 'assets/logo.svg';

export default function Menu() {
    const rotas = [{
        label: "Inicio",
        to: "/"
    }, {
        label: "Cardápio",
        to: "/cardapio"
    }, {
        label: "Sobre nós",
        to: "/sobre"
    }]
    return (
      <nav className={styles.menu}>
        <img src={logo} alt="Logo Aluroni" />
        <ul className={styles.menu__list}>
            {rotas.map((rota, index) => (
                <li key={index} className={styles.menu__link}>
                    <a href={rota.to}>{rota.label}</a>
                </li>
            ))}
        </ul>
      </nav>
    );
}