import { useEffect, useState } from "react";
import { ReactComponent as CaminhaoFrete } from "assets/svg/caminhaofrete.svg";
import classNames from "classnames";
import styles from "./PopupFrete.module.scss";
import axios from "axios";
interface Props {
  abrirFrete: any;
  setAbrirFrete: any;
  peso: any;
  cep: any;
  fornecedor: any;
  valorProduto: any;
}

export default function PopupFrete({
  abrirFrete,
  setAbrirFrete,
  peso,
  cep,
  fornecedor,
  valorProduto,
}: Props) {
  const [agr, setAgr] = useState(0);
  const [cidade, setCidade] = useState("");
      const apiUrl = 'https://sandbox.melhorenvio.com.br/v1/shipment/calculate';
    const accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU5NTJhNjAyNTYxNmM5NmM0ODUxM2QxODJlYTU0ZTFmNTM0NTI5ZTI2MWNlYjQzZWUyMmI1YmY2MjQwZmRmNzU1ZGM1YTE0YTg0ZjQ2OWNmIn0.eyJhdWQiOiIxIiwianRpIjoiNTk1MmE2MDI1NjE2Yzk2YzQ4NTEzZDE4MmVhNTRlMWY1MzQ1MjllMjYxY2ViNDNlZTIyYjViZjYyNDBmZGY3NTVkYzVhMTRhODRmNDY5Y2YiLCJpYXQiOjE2OTAzMTI1NDIsIm5iZiI6MTY5MDMxMjU0MiwiZXhwIjoxNzIxOTM0OTQyLCJzdWIiOiJlOGViYWE4ZS0zMTFkLTQ0YmEtOTE2Mi0zMWNkZmJmZTJhYTciLCJzY29wZXMiOlsiY2FydC1yZWFkIiwiY2FydC13cml0ZSIsImNvbXBhbmllcy1yZWFkIiwiY29tcGFuaWVzLXdyaXRlIiwiY291cG9ucy1yZWFkIiwiY291cG9ucy13cml0ZSIsIm5vdGlmaWNhdGlvbnMtcmVhZCIsIm9yZGVycy1yZWFkIiwicHJvZHVjdHMtcmVhZCIsInByb2R1Y3RzLWRlc3Ryb3kiLCJwcm9kdWN0cy13cml0ZSIsInB1cmNoYXNlcy1yZWFkIiwic2hpcHBpbmctY2FsY3VsYXRlIiwic2hpcHBpbmctY2FuY2VsIiwic2hpcHBpbmctY2hlY2tvdXQiLCJzaGlwcGluZy1jb21wYW5pZXMiLCJzaGlwcGluZy1nZW5lcmF0ZSIsInNoaXBwaW5nLXByZXZpZXciLCJzaGlwcGluZy1wcmludCIsInNoaXBwaW5nLXNoYXJlIiwic2hpcHBpbmctdHJhY2tpbmciLCJlY29tbWVyY2Utc2hpcHBpbmciLCJ0cmFuc2FjdGlvbnMtcmVhZCIsInVzZXJzLXJlYWQiLCJ1c2Vycy13cml0ZSIsIndlYmhvb2tzLXJlYWQiLCJ3ZWJob29rcy13cml0ZSIsIndlYmhvb2tzLXVwZGF0ZSIsIndlYmhvb2tzLWRlbGV0ZSIsInRkZWFsZXItd2ViaG9vayJdfQ.x7Nq8LF7e1gQxDTYoNka0uHysnoifxFaXMZ3n_unow1r6D02Aqs9rqpk6YjmM9Zs_DTfAAo4tk0CctWViq0YNCIYcEhsi-zoBTy-c_7oNr0eCf03u56bGupBT-WLSvm8iddMzI_9U_2NybLn3VgT12tzMc-RbyL12KRnGLyl0mNE8HhaNtj4D-BzSWwvibwMXkUKXyezHO9KQOFFfOKJT7PhtW2_SLZbeRlIXx4m03hjfRvewkWUrXLJnibnfmUOKmx6PgnYcPd9r0yb0UqhgBLIWqo2wutjKaRVsCPSka68Ga6P1oBZ-Vr4QIR2UBgGRwVmDxHUVFwOr8vo_7pZp6zkwarTJQYvj6qyPSe24cPra533vlpY9vQe5RgY2XqTPCJahJD449pTQRQ7HQfJcGRDfAKxS_Uh8f-4lxSmGRDVlyBo8aw9_nYalpBWSmPoHIzgypHvetfg_RUfDhH6xFZoHx5SFi4UeSCEVcHDx0ZiDYXp7Ur2yeja46Ao62xfjflplThRkNF8JVH5rQ2mulAvXm22YCX-wfjT2wsCanyQSSnd42eKgFgPsrUotSQq0Rh_JN3XHnHVbb1E1Rnka7l7GFwSb1Omv6dD5hVpFTs5u3NHgEQw49rJPXzrP0NE8jWIyUw_6KEytaAZJLPE1V277DLn4kGOaynNiruo8zo`; // Replace with your actual access token
    const data = {
      from: '85810000',
      to: '89835000', 
      height: 10, 
      width: 15, 
      length: 20, 
      weight: 2000, 
      products_value: 5000, 
    };
  const verFornecedor = () => {
    switch (fornecedor) {
      case "protear":
        return "85802-970";
    }
  };
    fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data)

    })
    .catch(error => {
        console.log(error);
    });
    
  const [resultado, setResultado] = useState("");
  const url = `https://api.melhorenvio.com.br/v1/shipping/quote?from=${verFornecedor}&to=${cep}&weight=${peso}&declared_value=${valorProduto}&api_key=${'apiKey'}`;

  useEffect(() => {
/*     if (agr === 0) {
      axios
        .get(url)
        .then((response: any) => {
          // Processar a resposta da API e extrair o valor do frete
          const freteValue =
            response.data?.price?.toFixed(2) || "Erro ao calcular frete";
          setResultado(freteValue);
        })
        .catch((error) => {
          console.error("Erro ao calcular frete:", error);
          setResultado("Erro ao calcular frete");
        });
    }
    setAgr(1); */
  }, [agr, url]);
  console.log(resultado)
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
        <CaminhaoFrete></CaminhaoFrete>
        Fretes disponíveis para {cidade}
      </div>
    </>
  );
}
