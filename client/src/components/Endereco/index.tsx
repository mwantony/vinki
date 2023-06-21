import { Formik } from "formik";
import styles from "./Endereco.module.scss";

export default function Endereco() {
  const handleEndereco = () => {
    return;
  };
  const validationEndereco = "";
  return (
    <section>
      <h2 className={styles["cadastrar__titulo"]}>ENDEREÇO</h2>
      <Formik
        initialValues={{}}
        onSubmit={handleEndereco}
        validationSchema={validationEndereco}
      ></Formik>
    </section>
  );
}
