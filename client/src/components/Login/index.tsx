import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const handleCadastro = async (values: any) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };
  const handleClick = async (values: any) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });

    /*     return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: values})
    .then(res => {
      console.log(res)
    }) */
  };
  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "O nome deve ter no mínimo 8 caracteres")
      .required("Este campo é obrigatório"),
  });
  const validationCadastrar = yup.object().shape({
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
      .oneOf([yup.ref("password")], "As senhas não são indênticas"),
  });
  return (
    <>
      {" "}
      <div className={styles.login}>
        <h2 className={styles["login__titulo"]}>FAZER LOGIN</h2>
        <Formik
          initialValues={{}}
          onSubmit={handleClick}
          validationSchema={validationLogin}
        >
          <Form>
            <div className={styles["login__form"]}>
              <Field
                name="email"
                className={styles['login__input']}
                placeholder="Email"
              ></Field>
              <ErrorMessage
                component="span"
                name="email"
                className={styles['login__error']}
              ></ErrorMessage>
              <Field
                name="password"
                type='password'
                className={styles['login__input']}
                placeholder="Senha"
              ></Field>
              <ErrorMessage
                component="span"
                name="password"
                className={styles['login__error']}
              ></ErrorMessage>
              <button className={styles['login__botao']} type="submit">
                Login
              </button>
              <p className={styles['login__paragraph']}>Novo na Vinki? <Link to='/cadastrar' className={styles['login__link']}>CADASTRE-SE</Link></p>
            </div>
          </Form>
        </Formik>
      </div>
      
    </>
  );
}
