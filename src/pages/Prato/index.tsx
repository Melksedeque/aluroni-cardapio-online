import styles from './Prato.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { useLocation } from 'react-router-dom'

export default function Prato() {
  console.log(useLocation());
  return (
    <div className={styles.prato}>
      <h3 className={stylesTema.titulo}>Prato</h3>
    </div>
  )
}