import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import styles from "./Inicio.module.scss";
import moveis from "../../assets/img/moveis.png";
import eletronicos from "../../assets/img/eletronicos.png";
import decoracoes from "../../assets/img/decoracoes.png";
import jardim from "../../assets/img/jardim.png";
import produtos from '../../db.json';
export default function Inicio() {
  const carousel = [
    {
      link: "https://cdn.discordapp.com/attachments/799817839484731397/1111705400463593482/f1.png",
    },
    {
      link: "https://cdn.discordapp.com/attachments/799817839484731397/1111705400463593482/f1.png",
    },
    {
      link: "https://cdn.discordapp.com/attachments/799817839484731397/1111705400463593482/f1.png",
    },
  ];
  const categorias = [
    {
      link: moveis,
      label: "Foto do móvel",
    },
    {
      link: eletronicos,
      label: "Foto do eletrônico",
    },
    {
      link: decoracoes,
      label: "Foto da decoração",
    },
    {
      link: jardim,
      label: "Foto do jardim",
    },
  ];
  return (
    <>
      <section>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {carousel.map((item, index) => {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to={index}
                  className="active"
                  aria-current="true"
                  aria-label={"Slide" + index}
                ></button>
              );
            })}
          </div>

          <div className="carousel-inner">
            {carousel.map((item, index) => {
              return (
                <>
                  <div className="carousel-item active">
                    <img
                      src={item.link}
                      className="d-block w-100"
                      alt={"Foto" + index}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <ArrowDown className={styles.arrowdown}></ArrowDown>
        <ul className={styles["lista--categoria"]}>
          {categorias.map((item, index) => {
            return (
              <li className={styles["lista--categoria__item"]}>
                <img src={item.link} alt={item.label} />
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles['emdestaque']}>
        <h2 className={styles['emdestaque__titulo']}>Produtos em destaque</h2>
        <ul className={styles['emdestaque__lista']}>
          {produtos.map((item, index) => {
            return(
              <li className={styles['emdestaque__lista--item']}>
                  <div className={styles['lista__imagem']} style={{backgroundImage: 'url(' + item.foto + ')'}} ></div>
                  <caption className="lista__legenda">
                    <h3 className={styles['lista__subtitulo']}>Sofá retrátil</h3>
                    <p className={styles['lista__categoria']}>Móveis</p>
                    <p className={styles['lista__preco']}>R$ 2500,00</p>
                    <h3 className={styles['lista__promo']}>R$ 1059,90</h3>
                    <button className={styles['lista__comprar']}>Comprar</button>
                  </caption>
              </li>
            )
          })}
        </ul>

      </section>
    </>
  );
}
