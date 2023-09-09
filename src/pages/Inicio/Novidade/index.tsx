import { ReactComponent as Clock } from "assets/svg/clock.svg";

import styles from "./Novidade.module.scss";


export default function Novidade() {
    
  return (
    <a href="" target="_blank" >
        <div className={styles["novidade"]}>
          <h3>SORTEIO LOJAS VINKI</h3>
          <div className={styles["novidade__cronometro"]}>
            <Clock></Clock>
            <div id="countdown-container" className={styles["countdown-container"]}>
              <div id="countdown" className={styles["countdown"]}>
                <div>
                  <div id="days" className={styles["countdown__value"]}></div>
                </div>
                <span>:</span>
                <div>
                  <div id="hours" className={styles["countdown__value"]}></div>
                </div>
                <span>:</span>
                <div>
                  <div id="minutes" className={styles["countdown__value"]}></div>
                </div>
                <span>:</span>
                <div>
                  <div id="seconds" className={styles["countdown__value"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </a>
  );
}
