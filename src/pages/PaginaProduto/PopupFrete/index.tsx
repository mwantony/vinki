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
  const apiUrl =
    "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate";
  const accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ0NGQwNzg5YmFlNDg1NzFjOTM0Mjg5OTY1ZjdhODZkZDQ4ZWRiMDQxNTlkZWVlN2Q2NTU0ZTgyNWEwNmY3MzI5NzNhN2I0ZTBjNWZjYzE4In0.eyJhdWQiOiI5NTYiLCJqdGkiOiI0NDRkMDc4OWJhZTQ4NTcxYzkzNDI4OTk2NWY3YTg2ZGQ0OGVkYjA0MTU5ZGVlZTdkNjU1NGU4MjVhMDZmNzMyOTczYTdiNGUwYzVmY2MxOCIsImlhdCI6MTY5MDMyMjk3MSwibmJmIjoxNjkwMzIyOTcxLCJleHAiOjE3MjE5NDUzNzEsInN1YiI6ImYzOTdlMWEzLWZmOWQtNDgwOC1hZTE2LTVlYWNlZGYxOWU5MyIsInNjb3BlcyI6WyJjYXJ0LXJlYWQiLCJjYXJ0LXdyaXRlIiwiY29tcGFuaWVzLXJlYWQiLCJjb21wYW5pZXMtd3JpdGUiLCJjb3Vwb25zLXJlYWQiLCJjb3Vwb25zLXdyaXRlIiwibm90aWZpY2F0aW9ucy1yZWFkIiwib3JkZXJzLXJlYWQiLCJwcm9kdWN0cy1yZWFkIiwicHJvZHVjdHMtZGVzdHJveSIsInByb2R1Y3RzLXdyaXRlIiwicHVyY2hhc2VzLXJlYWQiLCJzaGlwcGluZy1jYWxjdWxhdGUiLCJzaGlwcGluZy1jYW5jZWwiLCJzaGlwcGluZy1jaGVja291dCIsInNoaXBwaW5nLWNvbXBhbmllcyIsInNoaXBwaW5nLWdlbmVyYXRlIiwic2hpcHBpbmctcHJldmlldyIsInNoaXBwaW5nLXByaW50Iiwic2hpcHBpbmctc2hhcmUiLCJzaGlwcGluZy10cmFja2luZyIsImVjb21tZXJjZS1zaGlwcGluZyIsInRyYW5zYWN0aW9ucy1yZWFkIiwidXNlcnMtcmVhZCIsInVzZXJzLXdyaXRlIiwid2ViaG9va3MtcmVhZCIsIndlYmhvb2tzLXdyaXRlIl19.afKFwKr2xjQyc-O-LzbBoorA8wwZJlqEyCiXU69fDQIQR7NIrUdC34RhBibNbavZMTjYfRlkkxhnJt6Zf3Inm0GZfNAYCRo152i2-nMcwA52NSg9x_CiF3T2kE-KPeNMzxPXS3Znm9h_k3fWqsaFFAtA-JZsh4DjgDk_W6D96DZe60EkbpMq8fkAfEDEIGurbN-TyCXSZ7eau5Ob2W9OB_pK_TR3rNa2T1uLeIeT8gPxHlg93OdrMBNX_u8P7paqzZygMJwgnF5X14_OrJDuTa-UhgseBh3qfkQ3fwetAiQ18QtPFu5ygWqZcHnfvL8Jn0cTK0YX_XOcDr4XiTsxuPdniRDUckhJk9TH6Fybxx3GvYZ35ReeT4jqDw9i8fc8OapHopbmduY9Nvhod4C5vJ_9yv0RcsnMg8ViDrzTobcYCS_qSLl4LDfGkOC38NiY_lOdj-9mSKNq1bl1IrwlFDQZjR-86ggVMXyxZq0tUXaH4FDstAQdsldD8yIaaZUzQ2t2lgTn_bYQ1OR2vYrJ661CRJB4RDFBotQi9mGnVSVn50AWksEV782egc0xR-TsjJU8yzv8ByZSel6nFdVQPDxLBGgvGL_1SniDpVuNIcKahufZbSHpMd3M-JUWMht8sfoQEiioz4LG7j-5n6M051rDPfOsKPWgFlquAAf-TzM`; // Replace with your actual access token
  const verFornecedor = () => {
    switch (fornecedor) {
      case "protear":
        return "85816-050"; 
      case "voltaire":
        return "89930-000"
      default:
          return "";
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
        width: 15, 
        height: 10, 
        length: 15, 
        weight: 0.5,
        quantity: 1,
      },
    ],
    options: {
      receipt: false,
      own_hand: false,
    },
    services: "1,2,18",
  };
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
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const [resultado, setResultado] = useState("");
  const url = `https://api.melhorenvio.com.br/v1/shipping/quote?from=${verFornecedor}&to=${cep}&weight=${peso}&declared_value=${valorProduto}&api_key=${"apiKey"}`;

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
  console.log(resultado);
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
