import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import styles from "./Inicio.module.scss";
import moveis from "../../assets/img/moveis.png";
import eletronicos from "../../assets/img/eletronicos.png";
import decoracoes from "../../assets/img/decoracoes.png";
import jardim from "../../assets/img/jardim.png";
import produtos from "../../db.json";
import React from "react";
import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ReactComponent as ArrowBackIosIcon } from "../../assets/svg/prevbutton.svg";
import { ReactComponent as ArrowNextIosIcon } from "../../assets/svg/nextbutton.svg";
export default function Inicio() {
  const carousel = [
    {
      link: "https://cdn.discordapp.com/attachments/799817839484731397/1112064051233689650/f1-mobile.png",
    },
    {
      link: "https://cdn.discordapp.com/attachments/799817839484731397/1112064051233689650/f1-mobile.png",
    },
    {
      link: "https://cdn.discordapp.com/attachments/799817839484731397/1112064051233689650/f1-mobile.png",
    },
  ];
  const handleDragStart = (e: any) => e.preventDefault();
  const produtosEmDestaque = [
    <li className={styles["emdestaque__lista--item"]}>
      <div
        className={styles["lista__imagem"]}
        style={{ backgroundImage: "url('../../assets/img/emdestaque1.png')" }}
      ></div>
      <caption className="lista__legenda">
        <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
        <p className={styles["lista__categoria"]}>Móveis</p>
        <p className={styles["lista__preco"]}>R$ 2500,00</p>
        <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
        <button className={styles["lista__comprar"]}>Comprar</button>
      </caption>
    </li>,
    <li className={styles["emdestaque__lista--item"]}>
      <div
        className={styles["lista__imagem"]}
        style={{ backgroundImage: "url('../../assets/img/emdestaque1.png')" }}
      ></div>
      <caption className="lista__legenda">
        <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
        <p className={styles["lista__categoria"]}>Móveis</p>
        <p className={styles["lista__preco"]}>R$ 2500,00</p>
        <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
        <button className={styles["lista__comprar"]}>Comprar</button>
      </caption>
    </li>,
    <li className={styles["emdestaque__lista--item"]}>
      <div
        className={styles["lista__imagem"]}
        style={{ backgroundImage: "url('../../assets/img/emdestaque1.png')" }}
      ></div>
      <caption className="lista__legenda">
        <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
        <p className={styles["lista__categoria"]}>Móveis</p>
        <p className={styles["lista__preco"]}>R$ 2500,00</p>
        <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
        <button className={styles["lista__comprar"]}>Comprar</button>
      </caption>
    </li>,
    <li className={styles["emdestaque__lista--item"]}>
      <div
        className={styles["lista__imagem"]}
        style={{ backgroundImage: "url('../../assets/img/emdestaque1.png')" }}
      ></div>
      <caption className="lista__legenda">
        <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
        <p className={styles["lista__categoria"]}>Móveis</p>
        <p className={styles["lista__preco"]}>R$ 2500,00</p>
        <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
        <button className={styles["lista__comprar"]}>Comprar</button>
      </caption>
    </li>,
  ];
  const items = [
    <img
      src={moveis}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Foto Móvel"
      className={styles["lista__foto--slicer"]}
    />,
    <img
      src={eletronicos}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Foto Eletrônico"
      className={styles["lista__foto--slicer"]}
    />,
    <img
      src={decoracoes}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Foto Decoração"
      className={styles["lista__foto--slicer"]}
    />,
    <img
      src={jardim}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Foto Jardim"
      className={styles["lista__foto--slicer"]}
    />,
  ];
  const responsive = {
    2000: {
      items: 11,
    },
    1200: {
      items: 5,
    },
    800: {
      items: 3,
    },
    500: {
      items: 2,
    },
    0: {
      items: 1,
    },
  };
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
  const renderPrevButton = () => {
    return (
      <ArrowBackIosIcon style={{ position: "absolute", left: 0, top: 130 }} />
    );
  };
  const renderNextButton = () => {
    return (
      <ArrowNextIosIcon style={{ position: "absolute", right: 0, top: 130 }} />
    );
  };
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
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls={true}
          responsive={responsive}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </section>
      <section className={styles["emdestaque"]}>
        <h2 className={styles["emdestaque__titulo"]}>Produtos em destaque</h2>
        <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
        <li className={styles["emdestaque__lista--item"]}>
                <div
                  className={styles["lista__imagem"]}
                  style={{ backgroundImage: "url('../../assets/img/emdestaque1.png')" }}
                ></div>
                <div className={styles["lista__legenda"]}>
                  <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
                  <p className={styles["lista__categoria"]}>Móveis</p>
                  <p className={styles["lista__preco"]}>R$ 2500,00</p>
                  <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
                  <button className={styles["lista__comprar"]}>Comprar</button>
                </div>
              </li>
              <li className={styles["emdestaque__lista--item"]}>
                <div
                  className={styles["lista__imagem"]}
                  style={{ backgroundImage: "url('../../assets/img/emdestaque1.png')" }}
                ></div>
                <div className={styles["lista__legenda"]}>
                  <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
                  <p className={styles["lista__categoria"]}>Móveis</p>
                  <p className={styles["lista__preco"]}>R$ 2500,00</p>
                  <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
                  <button className={styles["lista__comprar"]}>Comprar</button>
                </div>
              </li>
              <li className={styles["emdestaque__lista--item"]}>
                <div
                  className={styles["lista__imagem"]}
                  style={{ backgroundImage: "url('../../assets/img/emdestaque1.png')" }}
                ></div>
                <div className={styles["lista__legenda"]}>
                  <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
                  <p className={styles["lista__categoria"]}>Móveis</p>
                  <p className={styles["lista__preco"]}>R$ 2500,00</p>
                  <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
                  <button className={styles["lista__comprar"]}>Comprar</button>
                </div>
              </li>
        </div>
        <ul className={styles["emdestaque__lista"]}>
          {produtos.map((item, index) => {
            return (
              <li className={styles["emdestaque__lista--item"]}>
                <div
                  className={styles["lista__imagem"]}
                  style={{ backgroundImage: "url(" + item.foto + ")" }}
                ></div>
                <div className={styles["lista__legenda"]}>
                  <h3 className={styles["lista__subtitulo"]}>Sofá retrátil</h3>
                  <p className={styles["lista__categoria"]}>Móveis</p>
                  <p className={styles["lista__preco"]}>R$ 2500,00</p>
                  <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
                  <button className={styles["lista__comprar"]}>Comprar</button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
