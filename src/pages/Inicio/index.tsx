import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import styles from "./Inicio.module.scss";
import moveis from "../../assets/img/moveis.png";
import eletronicos from "../../assets/img/eletronicos.png";
import decoracoes from "../../assets/img/decoracoes.png";
import jardim from "../../assets/img/jardim.png";
import produtos from "../../db.json";
import React, { useState } from "react";
import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-bootstrap";
import { ReactComponent as ArrowBackIosIcon } from "../../assets/svg/prevbutton.svg";
import { ReactComponent as ArrowNextIosIcon } from "../../assets/svg/nextbutton.svg";
import { slideRight, slideLeft } from "../../func/sliders";
import { Link } from "react-router-dom";
import Axios  from "axios";
export default function Inicio() {
  const [emDestaque, setEmDestaque] = useState([]);
  const [maisVendidos, setMaisVendidos] = useState([]);
  const [set, setSet] = useState(0);
  const [set1, setSet1] = useState(0);
  if (set === 0) {
    Axios.get(`http://localhost:3001/produtosrandom`).then((res) => {
      setEmDestaque(res.data);
      setSet(1);
    });
  }
  if (set1 === 0) {
    Axios.get(`http://localhost:3001/produtosrandom`).then((res) => {
      setMaisVendidos(res.data);
      setSet1(1);
    });
  }
  var width = window.innerWidth;
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
    <Link to={'/moveis'}>
      <img
        src={moveis}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Foto Móvel"
        className={styles["lista__foto--slicer"]}
      />
    </Link>,
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
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              src={
                width <= 568
                  ? "https://cdn.discordapp.com/attachments/799817839484731397/1112064051233689650/f1-mobile.png"
                  : "https://cdn.discordapp.com/attachments/1109594939840532501/1126310135048978532/image.png"
              }
              className="d-block w-100"
              alt={"Foto"}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src={
                width <= 568
                  ? "https://cdn.discordapp.com/attachments/799817839484731397/1112064051233689650/f1-mobile.png"
                  : "https://cdn.discordapp.com/attachments/1109594939840532501/1126310135048978532/image.png"
              }
              className="d-block w-100"
              alt={"Foto"}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src={
                width <= 568
                  ? "https://cdn.discordapp.com/attachments/799817839484731397/1112064051233689650/f1-mobile.png"
                  : "https://cdn.discordapp.com/attachments/1109594939840532501/1126310135048978532/image.png"
              }
              className="d-block w-100"
              alt={"Foto"}
            />
          </Carousel.Item>
        </Carousel>

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
            onClick={() => slideLeft("slider--emdestaque")}
            className={styles["arrowback"]}
          ></ArrowBackIosIcon>
          <div
            id="slider--emdestaque"
            className="emdestaque__slider w-full sliding h-full overflow-x-scroll whitespace-nowrap scroll scrollbar-hide scroll-smooth"
          >
            {emDestaque.map((item: any, index) => {
              return (
                <Link to={`/produto/${item.idprodutos}`} className={styles["emdestaque__lista--item"]}>
                  <div
                    className={styles["lista__imagem"]}
                    style={{ backgroundImage: "url(" + item.link + ")" }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <h3 className={styles["lista__subtitulo"]}>
                      {item.titulo}
                    </h3>
                    <p className={styles["lista__categoria"]}>{item.categoria}</p>
                    <p className={styles["lista__preco"]}>R$ {Number(item.precoAnterior).toFixed(2).replace('.', ',')}</p>
                    <h3 className={styles["lista__promo"]}>R$ {Number(item.promocao).toFixed(2).replace('.', ',')}</h3>
                    <button className={styles["lista__comprar"]}>
                      Comprar
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link to={"/emdestaque"}>
            <p className={styles["vertodos"]}>Ver todos</p>
          </Link>
          <ArrowNextIosIcon
            onClick={() => slideRight("slider--emdestaque")}
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
        <h2 className={styles["maisvendidos__titulo"]}>Mais vendidos</h2>

        <div className={styles["slider__div"]}>
          <ArrowBackIosIcon
            onClick={() => slideLeft("slider--maisvendidos")}
            className={styles["arrowback"]}
          ></ArrowBackIosIcon>
          <div
            id="slider--maisvendidos"
            className="w-full sliding h-full overflow-x-scroll whitespace-nowrap scroll scrollbar-hide scroll-smooth"
          >
            {maisVendidos.map((item: any, index) => {
              return (
                <Link to={`/produto/${item.idprodutos}`} className={styles["emdestaque__lista--item"]}>
                  <div
                    className={styles["lista__imagem"]}
                    style={{ backgroundImage: "url(" + item.link + ")" }}
                  ></div>
                  <div className={styles["lista__legenda"]}>
                    <h3 className={styles["lista__subtitulo"]}>
                      {item.titulo}
                    </h3>
                    <p className={styles["lista__categoria"]}>{item.categoria}</p>
                    <p className={styles["lista__preco"]}>R$ {Number(item.precoAnterior).toFixed(2).replace('.', ',')}</p>
                    <h3 className={styles["lista__promo"]}>R$ {Number(item.promocao).toFixed(2).replace('.', ',')}</h3>
                    <button className={styles["lista__comprar"]}>
                      Comprar
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link to={"/maisvendidos"}>
            <p className={styles["vertodos"]}>Ver todos</p>
          </Link>
          <ArrowNextIosIcon
            onClick={() => slideRight("slider--maisvendidos")}
            className={styles["arrownext"]}
          ></ArrowNextIosIcon>
        </div>
      </section>
    </>
  );
}
