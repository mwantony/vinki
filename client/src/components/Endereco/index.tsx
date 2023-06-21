import { Formik, Form, ErrorMessage, Field } from "formik";
import styles from "./Endereco.module.scss";
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  nome: any
}
export default function Endereco({nome}: Props) {
  const handleEndereco = () => {
    return;
  };
  const navigate = useNavigate();

  const validationEndereco = "";
  useEffect(() => {
    if (nome === "") {
      navigate("/login");
    }
  }, [navigate, nome]);
  return (
    <section className={styles["endereco"]}>
      <h2 className={styles["endereco__titulo"]}>ENDEREÇO</h2>
      <Formik
        initialValues={{}}
        onSubmit={handleEndereco}
        validationSchema={validationEndereco}
      >
        <Form className={styles["endereco__formform"]}>
          <div className={styles['endereco__form']}>
            <div className={styles["endereco__info"]}>
              <IMaskInput
                className={classNames({
                  [styles["endereco__input"]]: true,
                })}
                mask="00000-000"
                placeholder="CEP"
                type="text"
                name="cep"
              ></IMaskInput>
            </div>
            <div className={classNames({
              [styles["endereco__info"]]: true,
              [styles["endereco__input--complemento"]]: true
            })}>
              <Field
                name="complemento"
                className={classNames({
                  [styles["endereco__input"]]: true,
                })}
                placeholder="Complemento"
              ></Field>
              <ErrorMessage
                component="span"
                name="complemento"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
            <div className={classNames({
              [styles["endereco__info"]]: true,
              [styles["endereco__input--logradouro"]]: true
            })}>
              <Field
                name="logradouro"
                className={styles["endereco__input"]}
                placeholder="Logradouro"
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
                type='number'
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
                type='text'
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
                type='text'
                className={styles["endereco__input"]}
                placeholder="UF"
              ></Field>
              <ErrorMessage
                component="span"
                name="uf"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
            <div className={classNames({
              [styles["endereco__info"]]: true,
              [styles["endereco__input--pontoderef"]]: true
            })}>
              <Field
                name="pontoderef"
                type='text'
                className={styles["endereco__input"]}
                placeholder="Ponto de referência"
              ></Field>
              <ErrorMessage
                component="span"
                name="pontoderef"
                className={styles["endereco__error"]}
              ></ErrorMessage>
            </div>
          </div>
          <button
              className={classNames({
                [styles["endereco__botao"]]: true,
              })}
              type="submit"
            >
              Salvar
            </button>
        </Form>
      </Formik>
    </section>
  );
}
