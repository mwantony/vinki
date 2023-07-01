import Axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Moveis.module.scss";
import { ReactComponent as Sofa } from "../../assets/svg/sofa.svg";
import { motion} from 'framer-motion'
export default function Moveis() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  const handleChange = (event: any) => {
    setOpcaoSelecionada(event.target.value);
  };
  const [quantidade, setQuantidade] = useState(6);
  const [eh, setEh] = useState(1);
  const [moveisNum, setMoveisNum] = useState([]);
  const [moveisEncontrados, setMoveisEncontrados]: any = useState([]);

  const loadMore = () => {
    Axios.post("http://localhost:3001/moveis", { categoria: "Móveis" }).then(
      (res) => {
        setMoveisNum(res.data);
        const moveis = res.data.slice(0, quantidade);
        setMoveisEncontrados(moveis);
        setQuantidade(quantidade + 6);
      }
    );
  };
  useEffect(() => {
    if (eh === 1) {
      loadMore();
      setEh(2);
    }
  }, []);
  const produtosEncontrados = moveisNum.length;
  console.log(moveisEncontrados.length, moveisEncontrados.length);
  const hasMore = produtosEncontrados !== moveisEncontrados.length;


  return (
    <>
      
      <div className={styles["moveis__title"]}>
        <Sofa></Sofa>
        <p>Móveis</p>
        
      </div>
      <h3 className={styles['moveis__produtos-encontrados']}>{produtosEncontrados} produto(s) encontrados</h3>
      <section  className={styles["moveis"]}>
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
          {hasMore === true ? <button onClick={() => loadMore()}>Ver mais</button> : ''}
      </section>
    </>
  );
}
