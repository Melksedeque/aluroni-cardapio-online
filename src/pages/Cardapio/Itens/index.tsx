import cardapio from 'data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect, useCallback } from 'react';
import { Cardapio, Prato } from 'types/Prato';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  const testaBusca = useCallback(
    (title: string) => {
      const regex = new RegExp(busca, 'i');
      return regex.test(title);
    },
    [busca]
  );

  const testaFiltro = useCallback(
    (id: number) => {
      if (filtro !== null) return filtro === id;
      return true;
    },
    [filtro]
  );

  const ordenar = useCallback(
    (novaLista: Cardapio) => {
      switch (ordenador) {
        case 'porcao':
          return novaLista.sort((a: Prato, b: Prato) => (a.size > b.size ? 1 : -1));
        case 'qtd_pessoas':
          return novaLista.sort((a: Prato, b: Prato) => (a.serving > b.serving ? 1 : -1));
        case 'preco':
          return novaLista.sort((a: Prato, b: Prato) => (a.price > b.price ? 1 : -1));
        default:
          return novaLista;
      }
    },
    [ordenador]
  );

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador, testaBusca, testaFiltro, ordenar]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
