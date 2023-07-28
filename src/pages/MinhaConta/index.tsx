import { Field } from "formik";
import { ReactComponent as ProfileMenu } from "../../assets/svg/profile-menu.svg";
import styles from "./MinhaConta.module.scss";
import { IMaskInput } from "react-imask";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { ReactComponent as Pencil } from "../../assets/svg/pencil.svg";

import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import Endereco from "interfaces/Endereco";
import  Axios  from "axios";
import { atualiza } from "routes";
import Notificacao from "components/Notificacao";
interface Props {
  nome: any;
  tipoDeConta: any;
  cpfUser: any;
  dataDeNascimento: any;
  telefoneUser: any;
  emailUser: any;
  senhaUser: any;
  enderecoUsuarioParsed: Endereco;
  id: any
}

export default function MinhaConta({
  nome,
  tipoDeConta,
  cpfUser,
  dataDeNascimento,
  telefoneUser,
  emailUser,
  senhaUser,
  enderecoUsuarioParsed,
  id
}: Props) {
  const navigate = useNavigate();

  const [cpfAparecer, setCpfAparecer] = useState(false);
  const [telAparecer, setTelAparecer] = useState(false);
  const [nomeInput, setNomeInput] = useState(nome);
  const [email, setEmail] = useState(emailUser);
  const [telefone, setTelefone] = useState(telefoneUser);
  const validacao = enderecoUsuarioParsed.cep !== "";
  const [senha, setSenha] = useState(senhaUser);
  const [senhaConfirm, setSenhaConfirm] = useState(senhaUser);
  const [dataDeNascimentoInput, setDataDeNascimentoInput] = useState(dataDeNascimento)
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false)
  const props = {}; 
  const [cpf, setCpf] = useState(cpfUser);
  const [mask, setMask] = useState("(99) 99999-9999");

  const [tipo, setTipo] = useState(tipoDeConta === "pj" ? "pj" : "pf");
  const handleEverything = () => {
    Axios.post(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      password: senha,
      tipoDeConta: tipo,
      nome: nomeInput,
      cpf: cpf,
      dataDeNascimento: dataDeNascimentoInput,
      telefone: telefone,
    }).then((response) => {
      return
    });
  }
  useEffect(() => {
    if (nome === "") {
      navigate("/login");
    }
  }, [navigate, nome]);
  const [cnpj, setCnpj] = useState(tipoDeConta === "pj" ? true : false);
  return (
    <section className={styles["minhaconta"]}>
      <div className={styles["minhaconta__bemvindo"]}>
        <ProfileMenu
          className={styles["minhaconta__bemvindo-profile"]}
        ></ProfileMenu>
        <h2 className={styles["minhaconta__titulo"]}>Bem vindo, {nome}</h2>
      </div>
      <div className={styles["minhaconta__formWrapper"]}>
        <div className={styles["minhaconta__radioWrapper"]}>
          <h3 className={styles["minhaconta__tipodeconta"]}>Tipo de conta</h3>
          <div className={styles["minhaconta__tipos"]}>
            <div className={styles["minhaconta__pp"]}>
              <input
                checked={tipo === "pf" ? true : false}
                className={styles["minhaconta__inputRadio"]}
                onClick={() => {
                  setTipo("pf");
                }}
                type="radio"
                name="tipodeconta"
                id="pf"
              />
              <label
                className={styles["minhaconta__label"]}
                onClick={() => {
                  setCnpj(false);
                }}
                htmlFor="pf"
              >
                Pessoa física
              </label>
            </div>
            <div className={styles["minhaconta__pp"]}>
              <input
                className={styles["minhaconta__inputRadio"]}
                checked={tipo === "pj" ? true : false}
                onClick={() => {
                  setCnpj(true);
                  setTipo("pj");
                }}
                type="radio"
                name="tipodeconta"
                id="pj"
              />
              <label
                className={styles["minhaconta__label"]}
                onClick={() => {
                  setCnpj(true);
                }}
                htmlFor="pj"
              >
                Pessoa jurídica
              </label>
            </div>
          </div>
        </div>
        <div>
          <form className={styles["minhaconta__form"]}>
            <input
              name="name"
              className={styles["minhaconta__input"]}
              placeholder="Nome completo"
              defaultValue={nome}
              onChange={(event) => setNomeInput(event.target.value)}
            ></input>
            <IMaskInput
              className={classNames({
                [styles["minhaconta__input"]]: true,
                [styles["minhaconta__input--cpf"]]: true,
                [styles["minhaconta__input--cpfdesaparecer"]]:
                  cnpj === true ? true : false,
              })}
              mask="000.000.000-00"
              placeholder="CPF"
              defaultValue={cpfUser}
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
                [styles["minhaconta__input"]]: true,
                [styles["minhaconta__input--cnpj"]]: true,
                [styles["minhaconta__input--cnpjaparecer"]]:
                  cnpj === true ? true : false,
                [styles["minhaconta__input--cnpjdesaparecer"]]:
                  cnpj === false ? true : false,
              })}
              mask="00.000.000/0001-00"
              placeholder="CNPJ"
              defaultValue={cpfUser}
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
            <input
              name="date"
              type="date"
              className={styles["minhaconta__input"]}
              placeholder="Data de nascimento"
              defaultValue={dataDeNascimento}
              onChange={(event: any) => {
                setDataDeNascimentoInput(event?.target.value)
              }}
            />
            <InputMask
              placeholder="Telefone"
              name="tel"
              onChange={(event) => {
                setTelefone(event.target.value);
              }}
              className={styles["minhaconta__input"]}
              {...props}
              mask={mask}
              defaultValue={telefone}
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
            <input
              name="email"
              className={classNames({
                [styles["minhaconta__input"]]: true,
                [styles["minhaconta__input--email"]]: true,
              })}
              placeholder="Email"
              type="email"
              disabled={true}
              defaultValue={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <div>
              <input
                type="password"
                name="password"
                className={styles["minhaconta__input"]}
                defaultValue={senha}
                onChange={(event) => {
                  setSenha(event.target.value);
                }}
                placeholder="Senha"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                className={styles["minhaconta__input"]}
                defaultValue={senha}
                onChange={(event) => {
                  setSenhaConfirm(event.target.value);
                }}
                placeholder="Senha"
              />
            </div>
          </form>
          <button className={styles["minhaconta__botao"]} onClick={() => {
            handleEverything()
            atualiza()
            setMostrarNotificacao(true)
          }} >
            Salvar
          </button>
        </div>
      </div>
      <div className={styles["endereco"]}>
        <div className={styles['endereco__principal']}>
          <h2 className={styles["endereco__titulo"]}>Endereço</h2>
          <Link to='/endereco'>
            <Pencil className={styles["endereco__pencil"]}></Pencil>
          </Link>
        </div>
        <div className={styles["endereco__info"]}>
          {validacao ? (
            <p className={styles["endereco__paragrafo"]}>
              {enderecoUsuarioParsed.logradouro}
            </p>
          ) : (
            ""
          )}
          {validacao ? (
            <p className={styles["endereco__paragrafo"]}>
              Número {enderecoUsuarioParsed.numero},{" "}
              {enderecoUsuarioParsed.complemento}
            </p>
          ) : (
            ""
          )}
          {validacao ? (
            <p className={styles["endereco__paragrafo"]}>
              CEP {enderecoUsuarioParsed.cep} - {enderecoUsuarioParsed.cidade},{" "}
              {String(enderecoUsuarioParsed.uf).toUpperCase()}
            </p>
          ) : (
            ""
          )}
          {!validacao ? <p className={styles['endereco__nenhum']}>Nenhum endereço cadastrado</p> : ""}
        </div>
        <button onClick={() => {
          navigate('/pedidos')
        }} className={styles['minhaconta__pedidos']}>Meus pedidos</button>
      </div>
      <Notificacao  msg={'Atualizado com sucesso'} mostrarNotificacao={mostrarNotificacao} setMostrarNotificacao={setMostrarNotificacao}></Notificacao>
    </section>
  );
}
