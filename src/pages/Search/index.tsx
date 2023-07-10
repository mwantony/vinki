import Axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [agr, setAgr] = useState(0);
  const [input, setInput] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [produtosRandom, setProdutosRandom] = useState([]);
  let filteredData = produtos.filter((item: any) =>
    item.titulo.toLowerCase().includes(input.toLowerCase())
  );
  useEffect(() => {
    if (agr === 0) {
      Axios.get(`${process.env.REACT_APP_API_URL}/produtos`)
        .then((res: any) => {
          setProdutos(res.data);
          setAgr(1);
        })
        .then(() => {
          Axios.get(`${process.env.REACT_APP_API_URL}/produtosrandom`).then(
            (res) => {
              setProdutosRandom(res.data);
            }
          );
        });
    }
  }, [agr]);
  return (
    <>
      <section>
        <input
          type="text"
          name=""
          id=""
          onChange={(event: any) => {
            setInput(event.target.value);
            filteredData = produtos.filter((item: any) =>
              item.titulo.toLowerCase().includes(input.toLowerCase())
            );
          }}
        />
        {input !== ""
          ? filteredData.map((item: any) => {
              return <p>{item.titulo}</p>;
            })
          : produtosRandom.map((item: any) => <p>{item.titulo}</p>)}
      </section>
    </>
  );
}
