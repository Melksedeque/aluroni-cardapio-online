import styles from './Prato.module.scss';

export default function Prato() {
  const pratos = []
  return (
    <div className={styles.prato}>
      {pratos.map((prato, index) => (
        <div key={index} className={styles.prato__item}>
          {prato}
        </div>
      ))}
    </div>
  )
}