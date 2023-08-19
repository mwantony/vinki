import styles from "./Trocas.module.scss";
import { ReactComponent as Troca } from "assets/svg/trocas.svg";
export default function Trocas() {
  return (
    <section className={styles["trocas"]}>
      <div className={styles["trocas__title"]}>
        <Troca></Troca>
        <p className={styles["trocas__paragrafo"]}>Trocas e devoluções</p>
      </div>
      <div className={styles["trocas__info"]}>
        <h1 className={styles["trocas__titulo"]}>TROCAS E DEVOLUÇÕES</h1>

        <p className={styles["trocas__data"]}>Data da última atualização: 19 de julho de 2023.</p>

        <h2 className={styles["trocas__subtitulo"]}>1. TROCAS E DEVOLUÇÕES</h2>
        <p className={styles["trocas__paragrafo"]}>
          1.1 A VINKI se compromete com a satisfação de nossos clientes,
          oferecendo a melhor variedade de produtos de extrema qualidade, bem
          como parcerias com fornecedores de alto nível. Para preservar nossos
          clientes criamos uma Política de Trocas e Devoluções baseada no Código
          de Defesa do Consumidor, redigida abaixo.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          1.2 Ressalta-se que a troca e devolução de produtos, apenas será
          efetuada se houver respeito total às condições abaixo detalhadas.
        </p>
        <h2 className={styles["trocas__subtitulo"]}>2. CONDIÇÕES GERAIS</h2>
        <p className={styles["trocas__paragrafo"]}>
          2.1 Para efetuar o pedido de troca e devolução, o cliente deverá
          entrar em contato com nossa equipe através do e-mail:
          <a className={styles["trocas__email"]} href="mailto:trocas@vinki.com.br">trocas@vinki.com.br</a>.
        </p>
        <h2 className={styles["trocas__subtitulo"]}>3. MOTIVOS E PRAZOS</h2>
        <p className={styles["trocas__paragrafo"]}>
          3.1 Arrependimento/Desistência: Seguindo o “Art. 49 do Código de
          Defesa do Consumidor”, o prazo para arrependimento/desistência do
          cliente deve ocorrer dentro de 7 (sete) dias a partir do recebimento
          do produto, sendo assim, após receber o produto, o cliente tem 7
          (sete) dias para entrar em contato conosco via e-mail:
          <a className={styles["trocas__email"]} href="mailto:trocas@vinki.com.br">trocas@vinki.com.br</a>. Após recebermos seu pedido de devolução, nossa
          equipe enviará um formulário que deverá ser preenchido
          obrigatoriamente, para que o processo de troca e devolução possa
          acontecer.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.1.2 Seguindo a lei, não serão aceitos pedidos de troca ou devolução
          por insatisfação após 7 (sete) dias do recebimento do produto.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.1.3 Nossa equipe tem um prazo de até 5 (cinco) dias úteis para
          analisar o formulário. Após a checagem feita por nossa equipe, será
          gerada uma etiqueta de envio, para que o cliente possa enviar o
          produto para a troca ou devolução. O prazo de validade da etiqueta de
          postagem será de 6 (seis) dias (corridos). Ressalta-se que se por
          ventura, o cliente não fizer o envio do produto dentro do prazo de
          validade estipulado, a troca ou devolução será cancelada.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.2 Defeito técnico ou de fabricação: O cliente tem um prazo de 7
          (sete) dias a partir do recebimento do produto para fazer o pedido de
          troca ou devolução, seguindo o “Art. 18 e Art. 26 do Código de Defesa
          do Consumidor”.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.3 Avaria (Estrago). O cliente não deve aceitar o produto no momento
          da entrega, ou solicitar de imediato a troca ou devolução dentro do
          prazo legal.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.3.1 Nossa equipe entrará em contato com o cliente para encontrarmos
          a melhor solução do acontecido.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.3.2 Na solicitação de troca ou devolução, o cliente deverá enviar, o
          número do pedido, bem como, uma foto do estado do produto.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.4 Envio de produto errado: O cliente deverá recusar o recebimento do
          produto no momento de entrega ou solicitar a troca ou devolução dentro
          de um prazo de 7 (sete) dias, apartir do recebimento do produto,
          (seguindo o Art. 49 do Código de Defesa do Consumidor).
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.5 Após recebermos o produto, ele será avaliado, e se for constatado
          o perfeito estado do mesmo, o reembolso total do produto.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.6 Só serão aceitas solicitações de troca ou devolução no e-mail:
          <a className={styles["trocas__email"]} href="mailto:trocas@vinki.com.br">trocas@vinki.com.br</a>, e nele deve haver, detalhes do problema relatado
          pelo cliente, bem como fotos nítidas e vídeo.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          3.7 O estilo do produto, tão quanto a cor do mesmo, é de
          responsabilidade do cliente na hora da compra.
        </p>
        <h2 className={styles["trocas__subtitulo"]}>4. FORMAS DE RESTITUIÇÃO</h2>
        <p className={styles["trocas__paragrafo"]}>
          4.1 Crédito para Compras na Loja: Caso opte por essa modalidade, você
          receberá um crédito no valor total do produto devolvido, acrescido do
          valor do frete, se houver, que poderá ser utilizado para futuras
          compras em nossa loja. O crédito terá validade de 180 (cento e
          oitenta) dias, a partir da data de sua emissão.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          4.2 Estorno em Cartão de Crédito: Se a compra foi efetuada através de
          cartão de crédito, o valor será estornado na fatura do cartão
          utilizado para a compra original. O prazo para que o estorno seja
          efetivado pode variar de acordo com a administradora do cartão,
          seguindo as regras estabelecidas por ela.
        </p>
        <p className={styles["trocas__paragrafo"]}>
          4.3 Reembolso via Boleto Bancário: Caso a compra tenha sido paga por
          meio de boleto bancário, o reembolso será realizado por transferência
          bancária para a conta corrente de titularidade do cliente. Para isso,
          solicitaremos os dados bancários necessários para efetuar o depósito.
          O prazo para o reembolso é de até 10 (dez) dias úteis após o
          recebimento e conferência do produto devolvido.
        </p>
        <h2 className={styles["trocas__subtitulo"]}>5. EXCEÇÕES</h2>
        <p className={styles["trocas__paragrafo"]}>
          5.1 É importante ressaltar que nossa política de troca e devolução não
          se aplica a situações em que o produto apresentar sinais de mau uso,
          danos causados por acidentes, queda, contato com líquidos ou qualquer
          outra ação que caracterize violação das condições de uso.
        </p>

        <span className={styles["trocas__span"]}>
          Estamos à disposição para esclarecer quaisquer dúvidas e garantir que
          você tenha uma experiência de compra satisfatória em nossa loja.
        </span>

        <p className={styles["trocas__paragrafo--att"]}>Att, Lojas Vinki.</p>
      </div>
    </section>
  );
}
