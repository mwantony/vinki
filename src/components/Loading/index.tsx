import classNames from "classnames";
import styles from "./Loading.module.scss";

interface Props {
    aparecerLoading: any
    setAparecerLoading: any
    ehLogin: any
}

// Simulação de um atraso de 3 segundos antes de esconder o loading
// Chamada para mostrar o loading
export default function Loading({aparecerLoading, setAparecerLoading,ehLogin}: Props) {
    setTimeout(() => {
        setAparecerLoading(false)
    }, 3000)
  return (
    <>
      <div className={classNames({
        [styles["loading-overlay"]]: true,
        [styles["show"]]: aparecerLoading,
        [styles["loading-overlay-login"]]: ehLogin,

      })} id="loading-overlay">
        <div className={styles["loading-logo"]}>
          <div className={styles["loading-circle"]}></div>
        </div>
      </div>
    </>
  );
}
