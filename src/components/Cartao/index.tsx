import { Link } from 'react-router-dom'
import styles from './Cartao.module.scss'

interface Props {
    item: any
}

export default function Cartao({item}: Props) {
    return(
        <Link to={`/produto/${item.idprodutos}`} className={styles["moveis__lista--item"]}>
        <div
          className={styles["lista__imagem"]}
          style={{ backgroundImage: `url('${item.link}')` }}
        ></div>
        <div className={styles["lista__legenda"]}>
          <h3 className={styles["lista__subtitulo"]}>
            {item.titulo}
          </h3>
          <p className={styles["lista__categoria"]}>
            {item.categoria}
          </p>
          <p className={styles["lista__preco"]}>
            R${" "}
            {Number(item.precoAnterior)
              .toFixed(2)
              .replace(".", ",")}
          </p>
          <h3 className={styles["lista__promo"]}>
            R$ {Number(item.promocao).toFixed(2).replace(".", ",")}
          </h3>
          <button className={styles["lista__comprar"]}>
            Comprar
          </button>
        </div>
      </Link>
    )
}