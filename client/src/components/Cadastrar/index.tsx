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
  const [cpfAparecer, setCpfAparecer] = useState(false);
  const [telAparecer, setTelAparecer] = useState(false);
  const props = {};
  const [cnpj, setCnpj] = useState(false);
  const [tipo, setTipo] = useState("pf");
  const [isCheckedNovidades, setIsCheckedNovidades] = useState(false);
  const [isCheckedPoliticas, setIsCheckedPoliticas] = useState(false);
  const [aparecerErroNovidades, setAparecerErroNovidades] = useState(false);
  const [aparecerErroPoliticas, setAparecerErroPoliticas] = useState(false);
  const handleCadastro = async (values: any) => {
    if (
      !numbers.some((number) => telefone.includes(number)) ||
      cpf.length === 0 ||
      isCheckedNovidades === false ||
      isCheckedPoliticas === false
    ) {
      values.preventDefault();
    }
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cpf: cpf,
      tipoDeConta: tipo,
      date: values.date,
      tel: telefone,
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };
  const handleCheckboxChangeNovidades = () => {
    setIsCheckedNovidades(!isCheckedNovidades);
  };
  const handleCheckboxChangePoliticas = () => {
    setIsCheckedPoliticas(!isCheckedPoliticas);
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
          <Form className={styles["cadastrar__formform"]}>
            <h3 className={styles["cadastrar__tipodeconta"]}>Tipo de conta</h3>
            <div className={styles["cadastrar__tipos"]}>
              <div className={styles["cadastrar__pp"]}>
                <input
                  checked={cnpj === false ? true : false}
                  className={styles["cadastrar__inputRadio"]}
                  onClick={() => {
                    setCnpj(false);
                    setTipo("pf");
                  }}
                  type="radio"
                  name="tipodeconta"
                  id="pf"
                />
                <label
                  className={styles["cadastrar__label"]}
                  onClick={() => {
                    setCnpj(false);
                  }}
                  htmlFor="pf"
                >
                  Pessoa física
                </label>
              </div>
              <div className={styles["cadastrar__pp"]}>
                <input
                  className={styles["cadastrar__inputRadio"]}
                  onClick={() => {
                    setCnpj(true);
                    setTipo("pj");
                  }}
                  type="radio"
                  name="tipodeconta"
                  id="pj"
                />
                <label
                  className={styles["cadastrar__label"]}
                  onClick={() => {
                    setCnpj(true);
                  }}
                  htmlFor="pj"
                >
                  Pessoa jurídica
                </label>
              </div>
            </div>
            <div className={styles["cadastrar__form"]}>
              <div className={styles["cadastrar__info"]}>
                <Field
                  name="name"
                  className={styles["cadastrar__input"]}
                  placeholder="Nome completo"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="name"
                  className={styles["cadastrar__error"]}
                ></ErrorMessage>
              </div>
              <div className={styles["cadastrar__info"]}>
                <IMaskInput
                  className={classNames({
                    [styles["cadastrar__input"]]: true,
                    [styles["cadastrar__input--cpf"]]: true,
                    [styles["cadastrar__input--cpfdesaparecer"]]:
                      cnpj === true ? true : false,
                  })}
                  mask="000.000.000-00"
                  placeholder="CPF"
                  onBlur={() => {
                    if (cpf.length === 0) {
                      setCpfAparecer(true);
                    }
                  }}
                  onChange={(event: any) => {
                    setCpf(event.target.value);
                    setCpfAparecer(false);
                  }}
                  type="text"
                  name="cpf"
                ></IMaskInput>
                <IMaskInput
                  className={classNames({
                    [styles["cadastrar__input"]]: true,
                    [styles["cadastrar__input--cnpj"]]: true,
                    [styles["cadastrar__input--cnpjaparecer"]]:
                      cnpj === true ? true : false,
                    [styles["cadastrar__input--cnpjdesaparecer"]]:
                      cnpj === false ? true : false,
                  })}
                  mask="00.000.000/0001-00"
                  placeholder="CNPJ"
                  onBlur={() => {
                    if (cpf.length === 0) {
                      setCpfAparecer(true);
                    }
                  }}
                  onChange={(event: any) => {
                    setCpf(event.target.value);
                    setCpfAparecer(false);
                  }}
                  type="text"
                  name="cpf"
                ></IMaskInput>
                <span
                  className={classNames({
                    [styles["cadastrar__error--span"]]: true,
                    [styles["cadastrar__error--aparecer"]]:
                      cpfAparecer === true ? true : false,
                  })}
                >
                  Este campo é obrigatório
                </span>
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
                    setTelAparecer(false);
                    console.log(telefone);
                  }}
                  className={styles["cadastrar__input"]}
                  {...props}
                  mask={mask}
                  onBlur={(e) => {
                    if (!numbers.some((number) => telefone.includes(number))) {
                      setTelAparecer(true);
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
                    [styles["cadastrar__error--aparecer"]]:
                      telAparecer === true ? true : false,
                  })}
                >
                  Este campo é obrigatório
                </span>
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
              <div className={styles["cadastrar__checkbox"]}>
                <div className={styles["cadastrar__check"]}>
                  <input
                    defaultChecked={isCheckedNovidades}
                    onChange={() => {
                      setIsCheckedNovidades(!isCheckedNovidades);
                      setAparecerErroNovidades(false);
                    }}
                    type="checkbox"
                    name=""
                    id="novidades"
                  />
                  <label
                    className={styles["cadastrar__check-label"]}
                    htmlFor="novidades"
                  >
                    Quero receber ofertas e novidades por e-mail.
                  </label>
                  <span
                    className={classNames({
                      [styles["cadastrar__error--span"]]: true,
                      [styles["cadastrar__error--span-check"]]: true,

                      [styles["cadastrar__error--aparecer"]]:
                        aparecerErroNovidades === true ? true : false,
                    })}
                  >
                    Por favor, marque o checkbox.
                  </span>
                </div>
                <div className={styles["cadastrar__check"]}>
                  <input
                    defaultChecked={isCheckedPoliticas}
                    onChange={() => {
                      setIsCheckedPoliticas(!isCheckedPoliticas);
                      setAparecerErroPoliticas(false);
                    }}
                    type="checkbox"
                    name=""
                    id="politicas"
                  />
                  <label
                    className={styles["cadastrar__check-label"]}
                    htmlFor="politicas"
                  >
                    Li e estou de acordo com as políticas da empresa e políticas
                    de privacidade .
                  </label>
                  <span
                    className={classNames({
                      [styles["cadastrar__error--span"]]: true,
                      [styles["cadastrar__error--span-check"]]: true,
                      [styles["cadastrar__error--aparecer"]]:
                        aparecerErroPoliticas === true ? true : false,
                    })}
                  >
                    Por favor, marque o checkbox.
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                if (cpf.length === 0) {
                  setCpfAparecer(true);
                }
                if (telefone.length === 0) {
                  setTelAparecer(true);
                }
                if (isCheckedNovidades === false) {
                  setAparecerErroNovidades(true);
                }
                if (isCheckedPoliticas === false) {
                  setAparecerErroPoliticas(true);
                }
              }}
              className={classNames({
                [styles["cadastrar__botao"]]: true,
              })}
              type="submit"
            >
              Concluir
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
