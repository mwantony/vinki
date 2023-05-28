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
  const slideLeft = () => {
    var slider: any = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    var slider: any = document.getElementById("slider");
    slider.scrollLeft += 500;
  };
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

  const renderPrevButton = () => {
    return (
      <ArrowBackIosIcon style={{ position: "absolute", left: 10, top: 90 }} />
    );
  };
  const renderNextButton = () => {
    return (
      <ArrowNextIosIcon style={{ position: "absolute", right: 10, top: 90 }} />
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
        <div className={styles["slider__div"]}>
          <ArrowBackIosIcon
            onClick={slideLeft}
            className={styles["arrowback"]}
          ></ArrowBackIosIcon>
          <div
            id="slider"
            className="w-full sliding h-full overflow-x-scroll whitespace-nowrap scroll scrollbar-hide scroll-smooth"
          >
            {produtos.map((item, index) => {
              return (
                <li className={styles["emdestaque__lista--item"]}>
                  <div
                    className={styles["lista__imagem"]}
                    style={{ backgroundImage: "url(" + item.foto + ")" }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <h3 className={styles["lista__subtitulo"]}>
                      Sofá retrátil
                    </h3>
                    <p className={styles["lista__categoria"]}>Móveis</p>
                    <p className={styles["lista__preco"]}>R$ 2500,00</p>
                    <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
                    <button className={styles["lista__comprar"]}>
                      Comprar
                    </button>
                  </div>
                </li>
              );
            })}
          </div>
          <ArrowNextIosIcon
            onClick={slideRight}
            className={styles["arrownext"]}
          ></ArrowNextIosIcon>
        </div>
      </section>
      <section className={styles.newsletter}>
        <h2 className={styles["newsletter__titulo"]}>
          Cadastre-se e receba as melhores ofertas!
        </h2>
        <input
          type="text"
          name=""
          placeholder="Seu nome"
          id=""
          className={styles["newsletter__nome"]}
        />
        <input
          type="email"
          name=""
          placeholder="Email"
          id=""
          className={styles["newsletter__email"]}
        />
        <button type="submit" className={styles["newsletter__botao"]}>
          Cadastrar
        </button>
      </section>
      <section className={styles.maisvendidos}>
        <h2 className={styles["emdestaque__titulo"]}>Mais vendidos</h2>

        <div className={styles["slider__div"]}>
          <ArrowBackIosIcon
            onClick={slideLeft}
            className={styles["arrowback"]}
          ></ArrowBackIosIcon>
          <div
            id="slider"
            className="w-full sliding h-full overflow-x-scroll whitespace-nowrap scroll scrollbar-hide scroll-smooth"
          >
            {produtos.map((item, index) => {
              return (
                <li className={styles["emdestaque__lista--item"]}>
                  <div
                    className={styles["lista__imagem"]}
                    style={{ backgroundImage: "url(" + item.foto + ")" }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <h3 className={styles["lista__subtitulo"]}>
                      Sofá retrátil
                    </h3>
                    <p className={styles["lista__categoria"]}>Móveis</p>
                    <p className={styles["lista__preco"]}>R$ 2500,00</p>
                    <h3 className={styles["lista__promo"]}>R$ 1059,90</h3>
                    <button className={styles["lista__comprar"]}>
                      Comprar
                    </button>
                  </div>
                </li>
              );
            })}
          </div>
          <ArrowNextIosIcon
            onClick={slideRight}
            className={styles["arrownext"]}
          ></ArrowNextIosIcon>
        </div>
      </section>
    </>
  );
}
