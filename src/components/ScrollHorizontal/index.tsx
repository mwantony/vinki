import { Link } from "react-router-dom";
import { slideRight, slideLeft } from "../../func/sliders";
import { ReactComponent as ArrowBackIosIcon } from "../../assets/svg/prevbutton.svg";
import { ReactComponent as ArrowNextIosIcon } from "../../assets/svg/nextbutton.svg";
import styles from "./ScrollHorizontal.module.scss";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ReactComponent as CestaBranca } from "assets/svg/cesta-branca.svg";
interface Props {
  produtos: any;
  id: any;
}
export default function ScrollHorizontal({ produtos, id }: Props) {
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <>
      <div className={styles["slider__div"]}>
        {produtos.length !== 0 ? (
          <ArrowBackIosIcon
            onClick={() => slideLeft(id)}
            className={styles["arrowback"]}
          ></ArrowBackIosIcon>
        ) : (
          ""
        )}
        <div
          id={id}
          className="emdestaque__slider w-full sliding h-full overflow-x-scroll whitespace-nowrap scroll scrollbar-hide scroll-smooth"
          ref={parent}
        >
          {produtos.map((item: any, index: any) => {
            return (
              <Link
                onClick={() => {
                  setTimeout(() => window.location.reload(), 0);
                }}
                to={`/produto/${item.idprodutos}`}
                className={styles["emdestaque__lista--item"]}
              >
                <div
                  className={styles["lista__imagem"]}
                  style={{ backgroundImage: "url(" + item.link + ")" }}
                ></div>
                <div className={styles["lista__legenda"]}>
                  <h3 className={styles["lista__subtitulo"]}>{item.titulo}</h3>
                  <p className={styles["lista__categoria"]}>{item.categoria}</p>
                  <p className={styles["lista__preco"]}>
                    R$ {Number(item.precoAnterior).toFixed(2).replace(".", ",")}
                  </p>
                  <h3 className={styles["lista__promo"]}>
                    R$ {Number(item.promocao).toFixed(2).replace(".", ",")}
                  </h3>
                  <button className={styles["lista__comprar"]}>
                    <p>Comprar</p>
                    <CestaBranca></CestaBranca>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
        {produtos.length !== 0 ? (
          <ArrowNextIosIcon
            onClick={() => slideRight(id)}
            className={styles["arrownext"]}
          ></ArrowNextIosIcon>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
