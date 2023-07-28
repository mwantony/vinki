import classNames from "classnames";
import styles from "./Notificacao.module.scss";
import { useEffect, useState } from "react";
import {ReactComponent as Close} from 'assets/svg/close.svg'
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
    let interval: any;
    if(mostrarNotificacao) {
      interval = setInterval(() => {
          setProgress(prevProgress => {
            if (prevProgress >= 100) {
              clearInterval(interval);
              setMostrarNotificacao(false)
              return 0;
            }
            return prevProgress + 0.1; // 100 / 40 = 2.5, ou seja, aumenta 2.5% a cada 1ms
          });
        }, 1);
  
      // Limpe o intervalo quando o componente for desmontado
      return () => clearInterval(interval);
      
    }
  }, [mostrarNotificacao, setMostrarNotificacao]);

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
      <Close onClick={() => {
        setMostrarNotificacao(false)
      }} className={styles['notificacao__close']}></Close>
    </div>
    </>
  );
}
