const moment = require("moment");
export function ordenarCrescente(lista: any) {
  function compararPorPreco(a: any, b: any) {
    return b.promocao - a.promocao;
  }
  return lista.sort(compararPorPreco);
}
export function ordenarDecrescente(lista: any) {
  function compararPorPreco(a: any, b: any) {
    return a.promocao - b.promocao;
  }
  return lista.sort(compararPorPreco);
}
export function ordenarAprovados(lista: any, setPedidos: any) {
  return setPedidos(
    lista.filter((objeto: any) => objeto.status === "Aprovado")
  );
}
export function ordenarPendentes(lista: any, setPedidos: any) {
  return setPedidos(
    lista.filter((objeto: any) => objeto.status === "Pendente")
  );
}
export function ordenarCancelados(lista: any, setPedidos: any) {
  return setPedidos(
    lista.filter((objeto: any) => objeto.status === "Cancelado")
  );
}
export function ordenarMaisRecente(lista: any, setPedidos: any) {
  return setPedidos(
    lista.sort((a: any, b: any) => {
      return new Date(a.data).getTime() - new Date(b.data).getTime();
    })
  );
}
export function ordenarMaisAntigo(lista: any, setPedidos: any) {
  return setPedidos(
    lista.sort((a: any, b: any) => {
      return new Date(b.data).getTime() - new Date(a.data).getTime();
    })
  );
}
export function ordenarCategoria(lista: any, setLista: any, genero: any) {
  return setLista(lista.filter((book: any) => book.genero === genero));

}
