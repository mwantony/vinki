import { Formik, Form, ErrorMessage, Field } from "formik";
import styles from "./Endereco.module.scss";
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { atualiza } from "routes";
import Notificacao from "components/Notificacao";
const yup = require("yup");

interface Props {
  nome: any;
  id: any;
  cep: any;
  complemento: any;
  logradouro: any;
  numero: any;
  cidade: any;
  uf: any;
  pontoDeRef: any;
}
export default function Endereco({
  id,
  nome,
  cep,
  complemento,
  numero,
  logradouro,
  cidade,
  uf,
  pontoDeRef,
}: Props) {
  const [cepUser, setCepUser] = useState(cep);
  const [complementoUser, setComplementoUser] = useState(complemento);
  const [logradouroUser, setLogradouroUser] = useState(logradouro);
  const [numeroUser, setNumeroUser] = useState(numero);
  const [cidadeUser, setCidadeUser] = useState(cidade);
  const [ufUser, setUfUser] = useState(uf);
  const [pontoDeRefUser, setPontoDeRefUser] = useState(pontoDeRef);
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false)
  const handleEndereco = (event: any) => {
 
    if(cepUser === '' || complementoUser === '' || logradouroUser ==='' || numeroUser === '' || cidadeUser === "" ||
    ufUser === "" || pontoDeRefUser === '') {
      setMostrarNotificacao(true)
      event.preventDefault()
    }
    Axios.post(`${process.env.REACT_APP_API_URL}/endereco`, {
      usuarioEndereco: id,
      cep: cepUser,
      complemento: complementoUser,
      logradouro: logradouroUser,
      numero: numeroUser,
      cidade: cidadeUser,
      uf: ufUser,
      pontoDeRef: pontoDeRefUser,
    });
  };
  const navigate = useNavigate();

  const validationEndereco =  ''
  useEffect(() => {
    if (nome === "") {
      navigate("/login");
    }
  }, [navigate, nome]);
  const [foi, setFoi] = useState(0)
  return (
    <section className={styles["endereco"]}>
      <h2 className={styles["endereco__titulo"]}>ENDEREÇO</h2>
      <Formik
        initialValues={{}}
        onSubmit={handleEndereco}
        validationSchema={validationEndereco}
      >
        <Form className={styles["endereco__formform"]}>
          <div className={styles["endereco__form"]}>
            <div className={styles["endereco__info"]}>
              <IMaskInput
                className={classNames({
                  [styles["endereco__input"]]: true,
                })}
                mask="00000-000"
                placeholder="CEP"
                type="text"
                onClick={(event:any) => {
                  if(foi===0) {
                    event.target.value = ''
                    setFoi(1)
                  }
                }}
                onChange={(event: any) => {
                  setCepUser(event.target.value);
                }}
                name="cep"
                defaultValue={cep}
              ></IMaskInput>
              <span
                className={classNames({
                  [styles["endereco__error--span"]]: true,
                  [styles["endereco__error--aparecer"]]: cepUser === '' ? true : false  
                })}
              >
                *
              </span>
            </div>
            <div
              className={classNames({
                [styles["endereco__info"]]: true,
                [styles["endereco__input--complemento"]]: true,
              })}
            >
              <Field
                name="complemento"
                onChange={(event: any) => {
                  setComplementoUser(event.target.value);
                }}
                className={classNames({
                  [styles["endereco__input"]]: true,
                })}
                placeholder="Complemento"
                defaultValue={complemento}
              ></Field>
              <ErrorMessage
                component="span"
                name="complemento"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
            <div
              className={classNames({
                [styles["endereco__info"]]: true,
                [styles["endereco__input--logradouro"]]: true,
              })}
            >
              <Field
                name="logradouro"
                className={styles["endereco__input"]}
                placeholder="Logradouro"
                onChange={(event: any) => {
                  setLogradouroUser(event.target.value);
                }}
                defaultValue={logradouro}
              ></Field>
              <ErrorMessage
                component="span"
                name="logradouro"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
            <div className={styles["endereco__info"]}>
              <Field
                name="numero"
                defaultValue={numero}
                onChange={(event: any) => {
                  setNumeroUser(event.target.value);
                }}
                type="number"
                min={0}
                className={styles["endereco__input"]}
                placeholder="Número"
              ></Field>
              <ErrorMessage
                component="span"
                name="numero"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
            <div className={styles["endereco__info"]}>
              <Field
                name="cidade"
                onChange={(event: any) => {
                  setCidadeUser(event.target.value);
                }}
                defaultValue={cidade}
                type="text"
                className={styles["endereco__input"]}
                placeholder="Cidade"
              ></Field>
              <ErrorMessage
                component="span"
                name="cidade"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
            <div className={styles["endereco__info"]}>
              <Field
                name="uf"
                onChange={(event: any) => {
                  setUfUser(event.target.value);
                }}
                defaultValue={String(uf).toUpperCase()}
                type="text"
                className={styles["endereco__input"]}
                placeholder="UF"
                maxLength={2}
              ></Field>
              <ErrorMessage
                component="span"
                name="uf"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
            <div
              className={classNames({
                [styles["endereco__info"]]: true,
                [styles["endereco__input--pontoderef"]]: true,
              })}
            >
              <Field
                name="pontoDeRef"
                defaultValue={pontoDeRef}
                type="text"
                onChange={(event: any) => {
                  setPontoDeRefUser(event.target.value);
                }}
                className={styles["endereco__input"]}
                placeholder="Bairro"
              ></Field>
              <ErrorMessage
                component="span"
                name="pontoDeRef"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
          </div>
          <button
            className={classNames({
              [styles["endereco__botao"]]: true,
            })}
            type="submit"
            onClick={() => {
              atualiza();
              setTimeout(() => window.location.reload(), 1000);
            }}
          >
            Salvar
          </button>
        </Form>
      </Formik>
      <Notificacao setMostrarNotificacao={setMostrarNotificacao} mostrarNotificacao={mostrarNotificacao} msg={"Há dados faltando!"}></Notificacao>
    </section>
  );
}
