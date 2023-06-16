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
  const [cpf, setCpf] = useState("");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [cpfAparecer, setCpfAparecer] = useState(false)
  const [telAparecer, setTelAparecer] = useState(false)
  const props = {};
  const handleCadastro = async (values: any) => {
    if(!numbers.some(number => telefone.includes(number)) || cpf.length === 0) {
      values.preventDefault()
    }
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cpf: cpf,
      date: values.date,
      tel: telefone,
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
                <IMaskInput
                  className={styles["cadastrar__input"]}
                  mask="000.000.000-00"
                  placeholder="CPF"
                  onBlur={() => {
                    if(cpf.length === 0) {
                      setCpfAparecer(true)
                    }
                  }}
                  onChange={(event: any) => {
                    setCpf(event.target.value)
                    setCpfAparecer(false)
                  }}
                  type="text"
                  name="cpf"
                ></IMaskInput>
                <span
                  className={classNames({
                    [styles["cadastrar__error--span"]]: true,
                    [styles['cadastrar__error--aparecer']]: cpfAparecer === true ? true : false
                  })}
                >Este campo é obrigatório</span>
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
                    setTelAparecer(false)
                    console.log(telefone)
                  }}
                  className={styles["cadastrar__input"]}
                  {...props}
                  mask={mask}
                  onBlur={(e) => {
                    if(!numbers.some(number => telefone.includes(number))) {
                      setTelAparecer(true)
                    }
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
                <span
                  className={classNames({
                    [styles["cadastrar__error--span"]]: true,
                    [styles['cadastrar__error--aparecer']]: telAparecer === true ? true : false
                  })}
                >Este campo é obrigatório</span>
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
            <button onClick={() => {
              if(cpf.length === 0) {
                setCpfAparecer(true)
              }
              if(telefone.length === 0) {
                setTelAparecer(true)
              }
            }} className={styles["cadastrar__botao"]} type="submit">
              Concluir
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
