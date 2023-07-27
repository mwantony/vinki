import classNames from "classnames";
import styles from "./Notificacao.module.scss";
import { useEffect, useState } from "react";
interface Props {
  msg: any;
  mostrarNotificacao: any;
  setMostrarNotificacao: any;
}

export default function Notificacao({
  msg,
  mostrarNotificacao,
  setMostrarNotificacao,
}: Props) {
    const [progress, setProgress] = useState(0);

  // Simulando um processo assíncrono com o useEffect
  useEffect(() => {
    const interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setMostrarNotificacao(false)
            return 100;
          }
          return prevProgress + 0.1; // 100 / 40 = 2.5, ou seja, aumenta 2.5% a cada 1ms
        });
      }, 1);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className={classNames({
        [styles['notificacao']]: true,
        [styles['notificacao--aparecer']]: mostrarNotificacao,
    })}>
      <h3>{msg}</h3>
      <div className={styles['notificacao__progress-bar']}>
        <div className={styles['notificacao__progress']} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
    </>
  );
}
