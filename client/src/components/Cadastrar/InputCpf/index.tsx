import { IMaskInput } from "react-imask";
import styles from "./InputCpf.module.scss";
export default function InputCpf() {
  return (
    <IMaskInput
      className={styles["cadastrar__input"]}
      mask="000.000.000-00"
      placeholder="CPF"
      type="text"
      name="cpf"
    ></IMaskInput>
  );
}
