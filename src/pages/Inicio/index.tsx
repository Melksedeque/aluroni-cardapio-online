import cardapio from 'pages/Cardapio/Itens/itens.json';

export default function Inicio() {
  return (
    <section>
        <h3>Recomendações da Cozinha</h3>
        <div>
            {cardapio}
        </div>
    </section>
  );
}