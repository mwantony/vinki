import Axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./Cadastrar.module.scss";
import InputMask from "react-input-mask";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import classNames from "classnames";
import InputCpf from "./InputCpf";
import { Link } from "react-router-dom";
const yup = require("yup");
export default function Cadastrar() {
  const [mask, setMask] = useState("(99) 99999-9999");
  const [telefone, setTelefone] = useState("");
  const props = {};
  const handleCadastro = async (values: any) => {
    console.log(telefone);
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationCadastrar = yup.object().shape({
    name: yup.string().required("Este campo é obrigatório"),
    date: yup.string().required("Este campo é obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "O nome deve ter no mínimo 8 caracteres")
      .required("Este campo é obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Este campo é obrigatório")
      .oneOf([yup.ref("password")], "As senhas não são indênticas"),
  });
  return (
    <>
      <div className={styles.cadastrar}>
        <h2 className={styles["cadastrar__titulo"]}>Cadastro</h2>
        <Formik
          initialValues={{}}
          onSubmit={handleCadastro}
          validationSchema={validationCadastrar}
        >
          <Form>
            <div className={styles["cadastrar__form"]}>
              <div className={styles["cadastrar__info"]}>
                <Field
                  name="name"
                  className={styles["cadastrar__input"]}
                  placeholder="Nome"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="name"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>
              <div className={styles["cadastrar__info"]}>
                <Field name="cpf" type="text" component={InputCpf}></Field>
                <ErrorMessage
                  component="span"
                  name="cpf"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>
              <div className={styles["cadastrar__info"]}>
                <Field
                  name="date"
                  type="date"
                  className={styles["cadastrar__input"]}
                  placeholder="Data de nascimento"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="date"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>
              <div className={styles["cadastrar__info"]}>
                <InputMask
                  placeholder="Telefone"
                  name="tel"
                  onChange={(event) => {
                    setTelefone(event.target.value);
                  }}
                  className={styles["cadastrar__input"]}
                  {...props}
                  mask={mask}
                  onBlur={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 99999-9999");
                    }
                  }}
                  onFocus={(e) => {
                    if (e.target.value.replace("_", "").length === 14) {
                      setMask("(99) 99999-9999");
                    }
                  }}
                ></InputMask>
                <ErrorMessage
                  component="span"
                  name="tel"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>
              <div
                className={classNames({
                  [styles["cadastrar__info"]]: true,
                  [styles["cadastrar__info--email"]]: true,
                })}
              >
                <Field
                  name="email"
                  className={classNames({
                    [styles["cadastrar__input"]]: true,
                  })}
                  placeholder="Email"
                  type="email"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="email"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>

              <div className={styles["cadastrar__info"]}>
                <Field
                  type="password"
                  name="password"
                  className={styles["cadastrar__input"]}
                  placeholder="Senha"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="password"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>
              <div className={styles["cadastrar__info"]}>
                <Field
                  name="passwordConfirm"
                  type="password"
                  className={styles["cadastrar__input"]}
                  placeholder="Confirme sua senha"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="passwordConfirm"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>
            </div>
            <button className={styles["cadastrar__botao"]} type="submit">
              Concluir
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
