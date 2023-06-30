import Axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Moveis.module.scss";
import { ReactComponent as Sofa } from "../../assets/svg/sofa.svg";
export default function Moveis() {
  const [moveisEncontrados, setMoveisEncontrados]: any = useState([]);
  const produtosEncontrados = moveisEncontrados.length;
  useEffect(() => {
    Axios.post("http://localhost:3001/moveis", { categoria: "Móveis" }).then(
      (res) => setMoveisEncontrados(res.data)
    );
    console.log(moveisEncontrados);
  }, []);
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
