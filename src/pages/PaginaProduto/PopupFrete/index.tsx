import { useEffect, useState } from "react";
import { ReactComponent as CaminhaoFrete } from "assets/svg/caminhaofrete.svg";
import classNames from "classnames";
import styles from "./PopupFrete.module.scss";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as Check } from "assets/svg/check.svg";
import axios from "axios";
interface Props {
  abrirFrete: any;
  setAbrirFrete: any;
  peso: any;
  cep: any;
  fornecedor: any;
  valorProduto: any;
  height: any
  width: any
  length: any
  promocao: any
}

export default function PopupFrete({
  abrirFrete,
  setAbrirFrete,
  peso,
  cep,
  fornecedor,
  valorProduto,
  height,
  width,
  promocao,
  length
}: Props) {
  const [agr, setAgr] = useState(0);
  const [cidade, setCidade] = useState("")
  fetch(`${process.env.REACT_APP_API_URL}/buscarcidade/${cep}`).then((dados: any) => dados.json()).then((data: any) => setCidade(data.localidade))
  const [precoFrete, setPrecoFrete] = useState('')
  const [freteRange, setFreteRange] = useState('')
  const apiUrl =
    "https://vinkiapi.vercel.app/calcularfrete";
  const accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTYiLCJqdGkiOiIzNGQ3ZmJkZjdiOGQ2MjU2ZDU2YzIxODhmOGYwODEzMTM1YmY4ZDYyMWE4NzNlYmRlMWFhNjg2MDk0ZDU5NDYyODJiNDViNTk5ZGJjODYzOCIsImlhdCI6MTY5MDQyNTk1Ny4wODE2NTcsIm5iZiI6MTY5MDQyNTk1Ny4wODE2NiwiZXhwIjoxNzIyMDQ4MzU3LjA2ODQxNCwic3ViIjoiOTliZTRiNjItNWZmYy00Y2FhLTk5NGQtYTc1YWViOTVlYzM3Iiwic2NvcGVzIjpbImNhcnQtcmVhZCIsImNhcnQtd3JpdGUiLCJjb21wYW5pZXMtcmVhZCIsImNvbXBhbmllcy13cml0ZSIsImNvdXBvbnMtcmVhZCIsImNvdXBvbnMtd3JpdGUiLCJub3RpZmljYXRpb25zLXJlYWQiLCJvcmRlcnMtcmVhZCIsInByb2R1Y3RzLXJlYWQiLCJwcm9kdWN0cy1kZXN0cm95IiwicHJvZHVjdHMtd3JpdGUiLCJwdXJjaGFzZXMtcmVhZCIsInNoaXBwaW5nLWNhbGN1bGF0ZSIsInNoaXBwaW5nLWNhbmNlbCIsInNoaXBwaW5nLWNoZWNrb3V0Iiwic2hpcHBpbmctY29tcGFuaWVzIiwic2hpcHBpbmctZ2VuZXJhdGUiLCJzaGlwcGluZy1wcmV2aWV3Iiwic2hpcHBpbmctcHJpbnQiLCJzaGlwcGluZy1zaGFyZSIsInNoaXBwaW5nLXRyYWNraW5nIiwiZWNvbW1lcmNlLXNoaXBwaW5nIiwidHJhbnNhY3Rpb25zLXJlYWQiLCJ1c2Vycy1yZWFkIiwidXNlcnMtd3JpdGUiLCJ3ZWJob29rcy1yZWFkIiwid2ViaG9va3Mtd3JpdGUiLCJ3ZWJob29rcy11cGRhdGUiLCJ3ZWJob29rcy1kZWxldGUiLCJ0ZGVhbGVyLXdlYmhvb2siXX0.it0wbEAPHa3wezpRsuWX4W4ejebDzsSIxSf0iGKwZvAR36Q5oETV-3luongKWf-_3wWuqbOxFLMmZrdIBXmb0vh-KrbLEN09EWwIiDgU0RNFEG3a4CjCnbBVoTVi-fftXcwVXXxO3xLCz3H-HxZQ2xQSA-q-WAtk0tyX7o-Rf1wPhAY23xyoOoECkHBXnQr_JCCvfq5jIPIo3j_32TXbYA2aT1Rbj7aoenmn161YMN168G49cHTN88x6B1riOk7cTXboEXKkCNGmLDXLfysQr1wtW3aEyx-4RSiEewnFD7WXlk4zvSulFxDyUs4re12XlH2TKjhWF1cji4KBB9lcKLlNtiw9BwQj61NXZAOWYDsd2YmsufZRd8bvdVS54xe7EOYbhQZNZPu4vfgYpMnxVAuOoBdAyFaWtSP1UqeBmUPOvXtldx--jgounJ4-4a9bvSlONkoODXcl77hnxC1YeCe2Hi9UbB9LVlHH8XRNBNgUeqt88C7ESHA7uD2J5uM4h3tO0Buh9eEDVOlqqiMb3VBGY4NKGm0Tv_5Dt0bF_ryDM9lLBr1uDMsclMq3HjCZYu1H8s15iSzGCDQxNGxBuvrZAxCA8P2H6jdMbxUCFyW2aYjdImpw8XeaIx9WZDTx3LiO6Z84b9s6y1bAno0eMY03TLfYonZ6UwCTz7XryO4`; // Replace with your actual access token
  const verFornecedor = () => {
    switch (fornecedor) {
      case "protear":
        return "85816-050";
      case "voltaire":
        return "89930-000";
      case "dallcell":
        return "89930-000";
      default:
        return "85816-050";
    }
  };

  const data = {
    from: {
      postal_code: verFornecedor(), // bota esses cep
    },
    to: {
      postal_code: cep,
    },
    products: [
      {
        id: "x",
        width: Number(width),
        height: Number(height),
        length: Number(length),
        weight: Number(peso),
        quantity: 1,
        products_value: Number(promocao).toFixed(2)
      },
    ],
    options: {
      receipt: false,
      own_hand: false,
    },
    services: "1",
  };
  if(verFornecedor() !== cep) {

    fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPrecoFrete(data.price);
        setFreteRange(`${data.delivery_range.min} à ${data.delivery_range.max}`)
  
      })
      .catch((error) => {
      });
  }

  const [resultado, setResultado] = useState("");

  return (
    <>
      <div
        className={classNames({
          [styles["calcularfrete--div"]]: true,
          [styles["calcularfrete--div--aparecer"]]: abrirFrete,
        })}
        onClick={() => {
          setAbrirFrete(false);
        }}
      ></div>
      <div
        className={classNames({
          [styles["calcularfrete--aparecer"]]: abrirFrete,
          [styles["calcularfrete"]]: true,
        })}
      >
        <div className={styles['calcularfrete__fretes']}>
          <CaminhaoFrete></CaminhaoFrete>
          <p className={styles['calcularfrete__cidades']}>Fretes disponíveis para {cidade}</p>
          <Close className={styles['calcularfrete__close']} onClick={() => setAbrirFrete(false)}></Close>
        </div>
        <div className={styles['calcularfrete__opcoes']}>
          <p>
           {verFornecedor() !== cep ? `R$ ${precoFrete.replace('.', ',')}` : <strong>FRETE GRÁTIS</strong>} - <strong>PAC</strong> - {verFornecedor() !== cep ? `de ${freteRange} dias úteis` : "de 1 à 2 dias úteis"}
          </p>
          <Check></Check>
        </div>
      </div>
    </>
  );
}
