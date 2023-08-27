import classNames from "classnames";
import styles from "./Esqueceu.module.scss";
import { useState } from "react";
import Axios  from "axios";

interface Props {
  esqueceuAparecer: any;
  setEsqueceuAparecer: any;
  setEsqueceuNot: any
}

export default function Esqueceu({
  esqueceuAparecer,
  setEsqueceuAparecer,
  setEsqueceuNot
}: Props) {
  const [inputText, setInputText] = useState("");
  const validaEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(inputText);
  };
  const handle = () => {
    Axios.post(`${process.env.REACT_APP_API_URL}/esqueceu`, {email: inputText})
  }
  return (
    <>
      <div
        onClick={() => {
          setEsqueceuAparecer(false);
        }}
        className={classNames({
          [styles["esqueceu--div"]]: true,
          [styles["esqueceu--div--aparecer"]]: esqueceuAparecer,
        })}
      ></div>
      <div
        className={classNames({
          [styles["esqueceu"]]: true,
          [styles["esqueceu--aparecer"]]: esqueceuAparecer,
        })}
      >
        <h2 className={styles["esqueceu__titulo"]}>
          Digite o email para recuperação
        </h2>
        <div className={styles["esqueceu__flex"]}>
          <input
            onChange={(event: any) => {
              setInputText(event.target.value);
            }}
            placeholder="Email"
            className={styles["esqueceu__input"]}
            type="email"
            name=""
            id=""
          />
          <button
            className={styles["esqueceu__botao"]}
            onClick={() => {
              setEsqueceuAparecer(false);
              handle()
              setEsqueceuNot(true)
            }}
            disabled={validaEmail()}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}
