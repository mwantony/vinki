import styles from "./Rodape.module.scss";
import vinkiFooterMobile from "../../assets/img/vinki-footer-mobile.png";
import classNames from "classnames";
export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles["rodape__informacoes"]}>
        <div
          className={classNames({
            [styles["rodape__dep"]]: true,
            [styles["rodape__dep--desktop"]]: true,
          })}
        >
          <h2 className={styles["rodape__subtitulo"]}>Departamentos</h2>
          <ul className={styles["rodape__lista"]}>
            <a href="/categorias/moveis">
            <li
              className={classNames({
                [styles["rodape__item"]]: true,
                [styles["rodape__item--moveis"]]: true,
              })}
            >
              &nbsp;Móveis
            </li></a>
            <a href="/categorias/calcados">
            <li
              className={classNames({
                [styles["rodape__item"]]: true,
                [styles["rodape__item--calcados"]]: true,
              })}
            >
              &nbsp;Calçados
            </li></a>
            <a href="/categorias/ortopedia">
            <li
              className={classNames({
                [styles["rodape__item"]]: true,
                [styles["rodape__item--ortopedia"]]: true,
              })}
            >
              &nbsp;Ortopedia
            </li></a>
            <a href="/categorias/livros">
            <li
              className={classNames({
                [styles["rodape__item"]]: true,
                [styles["rodape__item--livros"]]: true,
              })}
            >
              &nbsp;Livros
            </li></a>
      
          </ul>
        </div>
        <div className={styles["rodape__dep"]}>
          <h2 className={styles["rodape__subtitulo"]}>Formas de pagamento</h2>
          <ul className={styles["rodape__lista"]}>
            <li
              className={classNames({
                [styles["rodape__item"]]: true,
                [styles["rodape__item--pix"]]: true,
              })}
            >
              &nbsp;Pix
            </li>
            <li
              className={classNames({
                [styles["rodape__item"]]: true,
                [styles["rodape__item--boleto"]]: true,
              })}
            >
              &nbsp;Boleto
            </li>
            <li
              className={classNames({
                [styles["rodape__item"]]: true,
                [styles["rodape__item--cartao"]]: true,
              })}
            >
              &nbsp;Cartão de débito/crédito
            </li>
          </ul>
        </div>
        <div className={styles["rodape__dep"]}>
          <h2 className={styles["rodape__subtitulo"]}>Mídias socias</h2>
          <ul className={styles["rodape__lista"]}>
            <a
              href="https://wa.me/5549991042777"
              target="_blank"
              rel="noreferrer"
            >
              <li
                className={classNames({
                  [styles["rodape__item"]]: true,
                  [styles["rodape__item--whatsapp"]]: true,
                })}
              >
                &nbsp;WhatsApp
              </li>
            </a>
            <a
              href="https://www.facebook.com/people/Lojas-Vinki/61550300483967/"
              target="_blank"
              rel="noreferrer"
            >
              <li
                className={classNames({
                  [styles["rodape__item"]]: true,
                  [styles["rodape__item--facebook"]]: true,
                })}
              >
                &nbsp;Facebook
              </li>
            </a>
            <a
              href="https://www.instagram.com/lojasvinki/"
              target="_blank"
              rel="noreferrer"
            >
              <li
                className={classNames({
                  [styles["rodape__item"]]: true,
                  [styles["rodape__item--instagram"]]: true,
                })}
              >
                &nbsp;Instagram
              </li>
            </a>
            <a
              href="https://www.threads.net/@lojasvinki"
              target="_blank"
              rel="noreferrer"
            >
              <li
                className={classNames({
                  [styles["rodape__item"]]: true,
                  [styles["rodape__item--twitter"]]: true,
                })}
              >
                &nbsp;Threads
              </li>
            </a>
          </ul>
        </div>
        <div className={styles["rodape__dep"]}>
          <h2 className={styles["rodape__subtitulo"]}>Atendimento</h2>
          <ul className={styles["rodape__lista"]}>
            <a
              href="https://wa.me/5549991042777"
              target="_blank"
              rel="noreferrer"
            >
              <li
                className={classNames({
                  [styles["rodape__item"]]: true,
                  [styles["rodape__item--sac"]]: true,
                })}
              >
                &nbsp;49 99104-2777
              </li>
            </a>
            <a href="mailto:atendimento@vinki.com.br">
              <li
                className={classNames({
                  [styles["rodape__item"]]: true,
                  [styles["rodape__item--email"]]: true,
                })}
              >
                &nbsp;atendimento@vinki.com.br
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className={styles["rodape__marca"]}>
        <a href="https://www.vinki.com.br/">
          <img
            src={vinkiFooterMobile}
            alt=""
            className={styles["rodape__imagem"]}
          />
        </a>
        <p className={styles["rodape__copy"]}>
          © Copyright Vinki 2023. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
