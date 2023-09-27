import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import styles from "./Inicio.module.scss";
import moveis from "../../assets/img/moveis.png";
import eletronicos from "../../assets/img/eletronicos.png";
import decoracoes from "../../assets/img/decoracoes.png";
import calcados from "../../assets/img/calcados.png";
import ortopedia from "../../assets/img/ortopedia.png";
import livros from "../../assets/img/livros.png";
import acessorios from "../../assets/img/acessorios.png";
import brinquedos from "../../assets/img/brinquedos.png";
import utilidades from "../../assets/img/utilidades.png";
import React, { useEffect, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-bootstrap";
import { ReactComponent as ArrowBackIosIcon } from "../../assets/svg/prevbutton.svg";
import { ReactComponent as ArrowNextIosIcon } from "../../assets/svg/nextbutton.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svg/whatsapplogo.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagramlogo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebooklogo.svg";
import { ReactComponent as ThreadsIcon } from "../../assets/svg/threadslogo.svg";
import { slideRight, slideLeft } from "../../func/sliders";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import ScrollHorizontal from "components/ScrollHorizontal";
import VideoPlayer from "components/VideoInstitucional";
import Notificacao from "components/Notificacao";
import Novidade from "./Novidade";
import { inicializarScript } from "func/func.js";
export default function Inicio() {
  const [emDestaque, setEmDestaque] = useState([]);
  const [newsEmail, setNewsEmail] = useState("");
  const [newsNome, setNewsNome] = useState("");
  const [maisVendidos, setMaisVendidos] = useState([]);
  const [emalta, setEmAlta] = useState([]);
  const [produtosRecomendados, setProdutosRecomendados] = useState([]);
  const [set, setSet] = useState(0);
  const [set1, setSet1] = useState(0);
  const [set2, setSet2] = useState(0);
  const [set3, setSet3] = useState(0);
  const [jaCadastrado, setJaCadastrado] = useState(false);
  const [cadastrado, setCadastrado] = useState(false);
  const [href, setHRef] = useState(useLocation());
  console.log(href)
  useEffect(() => {
    inicializarScript(href);
  }, []);
  if (set === 0) {
    Axios.get(
      `${process.env.REACT_APP_API_URL}/produtosrandom/Eletrônicos`
    ).then((res) => {
      setEmDestaque(res.data);
      setSet(1);
    });
  }
  if (set1 === 0) {
    Axios.get(
      `${process.env.REACT_APP_API_URL}/produtosrandom/Acessórios`
    ).then((res) => {
      setMaisVendidos(res.data);
      setSet1(1);
    });
  }
  if (set2 === 0) {
    Axios.get(`${process.env.REACT_APP_API_URL}/produtosrandom/Móveis`).then(
      (res) => {
        setEmAlta(res.data);
        setSet2(1);
      }
    );
  }
  if (set3 === 0) {
    Axios.get(`${process.env.REACT_APP_API_URL}/produtosrandom`).then((res) => {
      setProdutosRecomendados(res.data);
      setSet3(1);
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
    <Link to={"/categorias/eletronicos"}>
      <img
        src={eletronicos}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Foto Eletrônicos"
        className={styles["lista__foto--slicer"]}
      />
    </Link>,
    <Link to={"/categorias/acessorios"}>
      <img
        src={acessorios}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Foto Acessórios"
        className={styles["lista__foto--slicer"]}
      />
    </Link>,
    <Link to={"/categorias/moveis"}>
      <img
        src={moveis}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Foto Móvel"
        className={styles["lista__foto--slicer"]}
      />
    </Link>,
    <Link to={"/categorias/utilidades"}>
      <img
        src={utilidades}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Foto Utilidades"
        className={styles["lista__foto--slicer"]}
      />
    </Link>,
    <Link to={"/categorias/brinquedos"}>
      <img
        src={brinquedos}
        onDragStart={handleDragStart}
        role="presentation"
        alt="Foto Brinquedos"
        className={styles["lista__foto--slicer"]}
      />
    </Link>,
  ];
  const responsive = {
    1800: {
      items: 4,
    },
    1200: {
      items: 3,
    },
    800: {
      items: 2,
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
      <ArrowBackIosIcon
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    );
  };
  const renderNextButton = () => {
    return (
      <ArrowNextIosIcon
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    );
  };
  const validaEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(newsEmail);
  };
  const handleNews = () => {
    Axios.post(`${process.env.REACT_APP_API_URL}/cadastrarnews`, {
      email: newsEmail,
      nome: newsNome,
    }).then((res: any) => {
      if (res.data === "Email já cadastrado") {
        setJaCadastrado(true);
      } else {
        setCadastrado(true);
      }
    });
  };
  return (
    <>
      <section>
        <Novidade></Novidade>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              src={
                width <= 568
                  ? "https://cdn.discordapp.com/attachments/1067833193329344542/1156028993171116105/sorteio_mobile_1.png"
                  : "https://cdn.discordapp.com/attachments/1067833193329344542/1156027928782585866/sorteio_dekstop_1.png"
              }
              className="d-block w-100"
              alt={"Foto"}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to={"/produtossazonais/diadascriancas"}>
              <img
                src={
                  width <= 568
                    ? "https://cdn.discordapp.com/attachments/1067833193329344542/1156672309084557434/dia_das_criancas_mobile.png"
                    : "https://cdn.discordapp.com/attachments/1067833193329344542/1156674462087909436/dia_das_criancas_desktop.png"
                }
                className="d-block w-100"
                alt={"Foto"}
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src={
                width <= 568
                  ? "https://cdn.discordapp.com/attachments/1067833193329344542/1149840141045731479/frete_rapido.png"
                  : "https://cdn.discordapp.com/attachments/1067833193329344542/1149840141435809892/frete-brasil-desktop_2.png"
              }
              className="d-block w-100"
              alt={"Foto"}
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Link to={"/categorias/eletronicos"}>
              <img
                src={
                  width <= 568
                    ? "https://cdn.discordapp.com/attachments/1067833193329344542/1149841104796139690/eletronicosbarato--mobile.png"
                    : "https://cdn.discordapp.com/attachments/1067833193329344542/1149841105110704148/eletronicosbarato.png"
                }
                className="d-block w-100"
                alt={"Foto"}
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <a
              href="https://wa.me/5549991586073"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={
                  width <= 568
                    ? "https://cdn.discordapp.com/attachments/1067833193329344542/1149839215526420551/anuncie_seu_produto_na_vinki_1.png"
                    : "https://cdn.discordapp.com/attachments/1067833193329344542/1149838973687054447/anuncie_seu_produto.png"
                }
                className="d-block w-100"
                alt={"Foto"}
              />
            </a>
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
        <h2 className={styles["emdestaque__titulo"]}>Eletrônicos</h2>
        <ScrollHorizontal
          produtos={emDestaque}
          id={"emdestaque"}
        ></ScrollHorizontal>
        <div className={styles["emdestaque__vertodos"]}>
          <Link to={"/categorias/eletronicos"}>
            <p>Ver todos</p>
          </Link>
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
          onChange={(event: any) => {
            setNewsNome(event.target.value);
          }}
          id=""
          className={styles["newsletter__nome"]}
        />
        <input
          type="email"
          name=""
          onChange={(event: any) => {
            setNewsEmail(event.target.value);
          }}
          placeholder="Email"
          id=""
          className={styles["newsletter__email"]}
        />
        <button
          disabled={newsNome === "" || newsEmail === "" || validaEmail()}
          type="submit"
          className={styles["newsletter__botao"]}
          onClick={() => {
            handleNews();
          }}
        >
          Cadastrar
        </button>
        <Notificacao
          mostrarNotificacao={jaCadastrado}
          setMostrarNotificacao={setJaCadastrado}
          msg={"Email já cadastrado"}
        ></Notificacao>
        <Notificacao
          mostrarNotificacao={cadastrado}
          setMostrarNotificacao={setCadastrado}
          msg={"Cadastrado com sucesso"}
        ></Notificacao>
      </section>
      <section className={styles.maisvendidos}>
        <h2 className={styles["maisvendidos__titulo"]}>Acessórios</h2>

        <ScrollHorizontal
          produtos={maisVendidos}
          id={"maisvendidos"}
        ></ScrollHorizontal>
        <div className={styles["emdestaque__vertodos"]}>
          <Link to={"/categorias/acessorios"}>
            <p>Ver todos</p>
          </Link>
        </div>
      </section>
      <section className={styles["videoinstitucional"]}>
        <VideoPlayer></VideoPlayer>
      </section>
      <section className={styles.emalta}>
        <h2 className={styles["maisvendidos__titulo"]}>Móveis</h2>
        <ScrollHorizontal produtos={emalta} id={"emalta"}></ScrollHorizontal>
        <div className={styles["emdestaque__vertodos"]}>
          <Link to={"/categorias/moveis"}>
            <p>Ver todos</p>
          </Link>
        </div>
      </section>
      <section className={styles.saibaquemsomos}>
        <div className={styles["saibaquemsomos__div--imagem"]}>
          <img
            src="https://cdn.discordapp.com/attachments/1067833193329344542/1135368879116402759/sobrenos.png"
            alt="Foto da Vinki"
          />
        </div>
        <div className={styles["saibaquemsomos__info"]}>
          <h2 className={styles["saibaquemsomos__titulo"]}>Saiba quem somos</h2>
          <p className={styles["saibaquemsomos__paragrafo"]}>
            Fundada em 2023, a Vinki contém um extenso catálogo de produtos de
            alta qualidade. A empresa oferece uma experiência de compra
            descomplicada, garantindo a satisfação total dos clientes. Além
            disso, a Vinki destaca-se por seu compromisso com o cliente. Com uma
            equipe dedicada, a Vinki continua a prosperar como uma loja online
            de referência, tornando-se a escolha ideal para todos aqueles que
            buscam uma nova e incrível maneira de comprar online.
          </p>
          <div className={styles["saibaquemsomos__icons"]}>
            <a
              href="https://www.facebook.com/people/Lojas-Vinki/61550300483967/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon></FacebookIcon>
            </a>
            <a
              href="https://www.instagram.com/lojasvinki/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon></InstagramIcon>
            </a>
            <a
              href="https://wa.me/5549991586073"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappIcon></WhatsappIcon>
            </a>
            <a
              href="https://www.threads.net/@lojasvinki"
              target="_blank"
              rel="noreferrer"
            >
              <ThreadsIcon></ThreadsIcon>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.produtosrecomendados}>
        <h2 className={styles["maisvendidos__titulo"]}>
          Produtos recomendados
        </h2>
        <ScrollHorizontal
          produtos={produtosRecomendados}
          id={"produtosRecomendados"}
        ></ScrollHorizontal>
      </section>
    </>
  );
}
