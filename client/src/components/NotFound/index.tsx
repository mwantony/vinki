import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import { ReactComponent as Logo1 } from "assets/svg/nuvem1.svg";
import { ReactComponent as Logo2 } from "assets/svg/nuvem2.svg";
import { ReactComponent as Logo3 } from "assets/svg/nuvem3.svg";
interface Props {
  setSelecionado: any;
}

export default function NotFound({ setSelecionado }: Props) {
  return (
    <section className={styles.notfound}>
      <Logo1 className={styles.notfound__nuvem1} />
      <Logo2 className={styles.notfound__nuvem2}></Logo2>
      <Logo3 className={styles.notfound__nuvem3}></Logo3>
      <h2 className={styles.notfound__oops}>Oops...</h2>
      <h3 className={styles.notfound__titulo}>Não encontramos nada aqui!</h3>
      <p className={styles.notfound__paragraph}>
        Que tal ir para a página inicial?
      </p>
      <Link className={styles.notfound__link} to="/">
        <button
          onClick={() => {
            setSelecionado(0);
          }}
          className={styles.notfound__button}
        >
          Início
        </button>
      </Link>
    </section>
  );
}
