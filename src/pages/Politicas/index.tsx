import styles from "./Politicas.module.scss";
import { ReactComponent as Politica } from "assets/svg/politicass.svg";
export default function Politicas() {
  return (
    <section className={styles["politicas"]}>
      <div className={styles["politicas__title"]}>
        <Politica></Politica>
        <p>Políticas de privacidade</p>
      </div>
      <div className={styles["politicas__info"]}>
        <h1 className={styles["politicas__titulo"]}>
          POLÍTICAS DE PRIVACIDADE
        </h1>
        <p className={styles["politicas__data"]}>
          Data da última atualização: 03 de agosto de 2023
        </p>

        <h2 className={styles["politicas__subtitulo"]}>
          1. Coleta de Informações Pessoais:
        </h2>

        <p className={styles["politicas__paragrafo"]}>
          1.1. Coletamos informações essenciais, como nome, endereço, telefone e
          e-mail, para processar pedidos e fornecer suporte. Esses dados são
          necessários para a execução do contrato de compra e venda.
        </p>

        <p className={styles["politicas__paragrafo"]}>
          1.2. Ao efetuar compras, coletamos detalhes de pagamento, como número
          do cartão de crédito e informações de faturamento. Essas informações
          são criptografadas e processadas por meio de parceiros confiáveis de
          processamento de pagamento.
        </p>

        <p className={styles["politicas__paragrafo"]}>
          1.3. Registramos informações de uso do site, como páginas visitadas e
          produtos visualizados, para melhorar a experiência do usuário e
          otimizar nosso catálogo. Esses dados são agregados e não identificam
          pessoalmente você.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>
          2. Uso de Informações Pessoais:
        </h2>

        <p className={styles["politicas__paragrafo"]}>
          2.1. Utilizamos suas informações para processar e entregar pedidos,
          enviar informações de rastreamento e fornecer suporte pós-venda.
        </p>

        <p className={styles["politicas__paragrafo"]}>
          2.2. Com sua permissão, enviamos informações sobre promoções e
          produtos por e-mail. Você pode optar por não receber essas
          comunicações a qualquer momento.
        </p>

        <p className={styles["politicas__paragrafo"]}>
          2.3. Analisamos dados de uso para aprimorar nosso site, personalizar
          conteúdo e aperfeiçoar a experiência de compra.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>
          3. Compartilhamento de Informações:
        </h2>

        <p className={styles["politicas__paragrafo"]}>
          3.1. Compartilhamos informações com parceiros de confiança, como
          processadores de pagamento e empresas de transporte, para cumprir
          pedidos e entregas. Eles são obrigados a manter suas informações
          seguras e não usar para outros fins.
        </p>

        <p className={styles["politicas__paragrafo"]}>
          3.2. Podemos divulgar informações em resposta a solicitações legais e
          regulatórias, cumprindo obrigações legais e protegendo nossos
          direitos.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>
          4. Segurança de Dados:
        </h2>

        <p className={styles["politicas__paragrafo"]}>
          4.1. Implementamos medidas de segurança para proteger suas informações
          contra acesso não autorizado e uso indevido.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>5. Seus Direitos:</h2>

        <p className={styles["politicas__paragrafo"]}>
          5.1. Você tem o direito de acessar suas informações pessoais e
          corrigi-las, se necessário.
        </p>

        <p className={styles["politicas__paragrafo"]}>
          5.2. Você pode solicitar a exclusão de seus dados pessoais, a menos
          que tenhamos obrigações legais de retenção.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>
          6. Cookies e Tecnologias Similares:
        </h2>

        <p className={styles["politicas__paragrafo"]}>
          6.1. Utilizamos cookies para melhorar a experiência do usuário. Ao
          navegar em nosso site, você concorda com o uso de cookies de acordo
          com nossa Política de Cookies.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>
          7. Alterações na Política de Privacidade:
        </h2>

        <p className={styles["politicas__paragrafo"]}>
          7.1. Reservamo-nos o direito de modificar esta política a qualquer
          momento. Notificaremos você sobre alterações relevantes por meio de
          comunicações no site ou por e-mail.
        </p>

        <span className={styles["politicas__span"]}>
          Estamos à disposição para esclarecer quaisquer dúvidas e garantir que
          você tenha uma experiência de compra satisfatória em nossa loja.
        </span>

        <p className={styles["politicas__paragrafo--att"]}>Att, Vinki</p>
      </div>
    </section>
  );
}
