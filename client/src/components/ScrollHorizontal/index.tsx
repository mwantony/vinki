import { Link } from "react-router-dom";
import { slideRight, slideLeft } from "../../func/sliders";
import { ReactComponent as ArrowBackIosIcon } from "../../assets/svg/prevbutton.svg";
import { ReactComponent as ArrowNextIosIcon } from "../../assets/svg/nextbutton.svg";
import styles from './ScrollHorizontal.module.scss'
export default function ScrollHorizontal({produtos}: any) {
    return(
        <>
                  <div className={styles["slider__div"]}>
          <ArrowBackIosIcon
            onClick={() => slideLeft("slider--emdestaque")}
            className={styles["arrowback"]}
          ></ArrowBackIosIcon>
          <div
            id="slider--emdestaque"
            className="emdestaque__slider w-full sliding h-full overflow-x-scroll whitespace-nowrap scroll scrollbar-hide scroll-smooth"
          >
            {produtos.map((item:any, index:any) => {
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
            onClick={() => slideRight("slider--emdestaque")}
            className={styles["arrownext"]}
          ></ArrowNextIosIcon>
        </div>
        </>
    )
}