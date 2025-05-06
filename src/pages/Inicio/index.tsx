import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => Math.random() - 0.5).splice(0, 3);
  return (
    <section>
        <h3 className={styles.titulo}>Recomendações da Cozinha</h3>
        <div className={styles.recomendados}>
            {pratosRecomendados.map(item => (
                <div key={item.id} className={styles.recomendado}>
                  <div className={styles.recomendado__imagem}>
                    <img src={item.photo} alt={item.title} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <button className={styles.recomendado__botao}>Ver mais</button>
                </div>
            ))}
        </div>
    </section>
  );
}