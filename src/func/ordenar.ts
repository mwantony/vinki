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
