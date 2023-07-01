import Axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styles from "./Moveis.module.scss";
import { ReactComponent as Sofa } from "../../assets/svg/sofa.svg";
import  useInfiniteScroll  from 'react-infinite-scroll-hook';

export default function Moveis() {
  const [moveisEncontrados, setMoveisEncontrados]: any = useState([]);
  const produtosEncontrados = moveisEncontrados.length;
  const [isLoading, setIsLoading] = useState(false); // Indicates if more elements are being loaded
  const [quantidade, setQuantidade] = useState(6)
  const loadMore = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    Axios.post("http://localhost:3001/moveis", { categoria: "Móveis" }).then(
      (res) => setMoveisEncontrados(res.data)
    );
    moveisEncontrados.slice(0, quantidade)
    setQuantidade(quantidade + 6)
    
    // Simulate an asynchronous request to fetch elements
    // Replace this with your own logic to fetch elements
    // In this example, we're just adding incremental numbers
    setTimeout(() => {
      setMoveisEncontrados(() => [...moveisEncontrados]);
      setIsLoading(false);
    }, 1000);
  }, [isLoading, moveisEncontrados, quantidade]);
  useEffect(() => {
    loadMore()
  }, [loadMore]);
  const infiniteRef = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: true, // Indicates if there are more elements to load
    onLoadMore: loadMore,
    scrollContainer: 'window', // Optional, set this if you have a specific scrollable container
  });
  return (
    <>
      <div className={styles["moveis__title"]}>
        <Sofa></Sofa>
        <p>Móveis</p>
      </div>
      <h3 className={styles['moveis__produtos-encontrados']}>{produtosEncontrados} produto(s) encontrados</h3>
      <section className={styles["moveis"]}>
        {moveisEncontrados
          ? moveisEncontrados.map((produto: any, index: any) => {
              return (
                <li className={styles["moveis__lista--item"]}>
                  <div
                    className={styles["lista__imagem"]}
                    style={{ backgroundImage: `url('${produto.link}')` }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <h3 className={styles["lista__subtitulo"]}>
                      {produto.titulo}
                    </h3>
                    <p className={styles["lista__categoria"]}>
                      {produto.categoria}
                    </p>
                    <p className={styles["lista__preco"]}>
                      R${" "}
                      {Number(produto.precoAnterior)
                        .toFixed(2)
                        .replace(".", ",")}
                    </p>
                    <h3 className={styles["lista__promo"]}>
                      R$ {Number(produto.promocao).toFixed(2).replace(".", ",")}
                    </h3>
                    <button className={styles["lista__comprar"]}>
                      Comprar
                    </button>
                  </div>
                </li>
              );
            })
          : ""}
      </section>
    </>
  );
}
