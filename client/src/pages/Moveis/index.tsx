import Axios from "axios";
import { useEffect, useState } from "react";
import styles from './Moveis.module.scss'

export default function Moveis() {
  const produtosEncontrados = "13";
  const [moveisEncontrados, setMoveisEncontrados]: any = useState([])
  useEffect(() => {
    Axios.post("http://localhost:3001/moveis", {categoria: 'Móveis'}).then((res) => setMoveisEncontrados(res.data))
    console.log(moveisEncontrados)
  }, []);
  return (
    <>
      <div>Móveis</div>
        <h3>{produtosEncontrados} produto(s) encontrados</h3>
      <section className={styles['moveis']}>
        {moveisEncontrados.titulo !== '' ? moveisEncontrados.map((produto: any, index: any) => {
            return(
                <li className={styles["moveis__lista--item"]}>
                  <div
                    className={styles["lista__imagem"]}
                    style={{ backgroundImage: "url()" }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <h3 className={styles["lista__subtitulo"]}>
                      {produto.titulo}
                    </h3>
                    <p className={styles["lista__categoria"]}>Móveis</p>
                    <p className={styles["lista__preco"]}>R$ 2500,00</p>
                    <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
                    <button className={styles["lista__comprar"]}>
                      Comprar
                    </button>
                  </div>
                </li>
            )
        }): 'sdsd'}
      </section>
    </>
  );
}
