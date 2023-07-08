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
