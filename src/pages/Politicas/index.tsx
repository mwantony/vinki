import styles from "./Politicas.module.scss";
import { ReactComponent as Politica } from "assets/svg/politicas.svg";
export default function Politicas() {
  return (
    <section className={styles["politicas"]}>
      <div className={styles["politicas__title"]}>
        <Politica></Politica>
        <p>Políticas de privacidade</p>
      </div>
      <div className={styles["politicas__info"]}>
        <h1 className={styles["politicas__titulo"]}>TERMOS DE SERVIÇO</h1>
        <p className={styles["politicas__data"]}>Data da última atualização: 20 de julho de 2023.</p>

        <span className={styles["politicas__span"]}>
          ESTES SÃO OS TERMOS DE SERVIÇO QUE GOVERNAM O USO DESTE SITE. AO
          ACESSAR E NAVEGAR NESTA PÁGINA, VOCÊ ESTÁ CONCORDANDO COM TODAS AS
          DISPOSIÇÕES CONTIDAS NESTES TERMOS. RECOMENDAMOS QUE VOCÊ VERIFIQUE
          PERIODICAMENTE NOSSOS TERMOS DE SERVIÇO PARA SE MANTER INFORMADO SOBRE
          QUAISQUER ATUALIZAÇÕES OU MUDANÇAS.
        </span>

        <h2 className={styles["politicas__subtitulo"]}>1. USO DO SITE</h2>
        <p className={styles["politicas__paragrafo"]}>
          1.1 Nosso site é destinado apenas à pessoas maiores de idade e/ou
          capazes de celebrar contratos legais, seguindo a legislação vigente no
          seu país de origem.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          1.2 Ao acessar o site, você concorda em não usufruir de nosso serviço
          para fins ilegais, fraudulentos, ofensivos e difamatórios, que violem
          o direito de terceiros.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          1.3 Ao navegar em nosso site, você concorda, em não realizar
          atividades que possam comprometer a estabilidade ou segurança de nossa
          plataforma, inclusive tentativas de acesso não autorizado, bem como
          introdução de malwares, ou quaisquer tipos de ataques cibernéticos.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>2. PRODUTOS E INFORMAÇÕES</h2>
        <p className={styles["politicas__paragrafo"]}>
          2.1 A equipe da Vinki, faz o possível para fornecer todas as
          informações precisas e atualizadas sobre nossos produtos, incluindo
          preços, descrições e disponibilidade em estoque. Ressalta-se que não
          garantimos que todas as informações sejam isentas de omissões bem como
          de erros, e reserva-nos o direito de corrigir tais informações quando
          necessário.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          2.2 As imagens de produtos disponibilizadas em nosso site, são
          meramente ilustrativas, podendo variar em relação ao produto real, bem
          como cor, tamanho e embalagem.
        </p>
        <h2 className={styles["politicas__subtitulo"]}>3. COMPRAS E PAGAMENTOS</h2>
        <p className={styles["politicas__paragrafo"]}>
          3.1 Realizando uma compra em nossa plataforma, você declara estar
          ciente de que o pagamento é única e exclusivamente de sua
          responsabilidade, incluindo-se, impostos, taxas, e custos de envio
          aplicáveis.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          3.2 A Vinki dispõe de diversos métodos de pagamento, que podem variar
          de acordo com sua preferência disponíveis na plataforma, assim como
          sua localização.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          3.3 Após efetuar o pagamento, a Vinki enviará um comprovante de compra
          através de seu e-mail cadastrado em nossa plataforma.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>4. ENVIO E ENTREGA</h2>
        <p className={styles["politicas__paragrafo"]}>
          4.1 As informações sobre custos, prazos e envios, serão
          disponibilizadas pela Vinki, durante o processo de compra.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          4.2 A equipe da Vinki fará o possível para cumprir os prazos
          estipulados para entrega, porém, não nos responsabilizamos por atrasos
          decorrentes de eventos fora de nosso controle, como desastres
          naturais, greves, e afins.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          4.3 Em caso de problemas com a entrega de nossos produtos, entre em
          contato com a equipe da Vinki no e-mail: suporte@vinki.com.br.
        </p>

        <h2 className={styles["politicas__subtitulo"]}>5. PRIVACIDADE E SEGURANÇA</h2>

        <p className={styles["politicas__paragrafo"]}>
          5.1 Nossa plataforma respeita sua privacidade, e protegemos suas
          informações pessoais de acordo com nossa Política de Privacidade.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          5.2 Ao utilizar nossos serviços, você concorda com a coleta e
          tratamento de seus dados pessoais disponibilizados por você em nosso
          site.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          5.3 Nosso site é certificado pela Norton Security, garantindo uma
          experiência totalmente segura e livre de ameaças.
        </p>
        <h2 className={styles["politicas__subtitulo"]}>6. PRIVACIDADE INTELECTUAL</h2>
        <p className={styles["politicas__paragrafo"]}>
          6.1 Todos os elementos encontrados em nosso site, tais como textos,
          imagens, logotipos, design e outros materiais, são de propriedade
          exclusiva da nossa empresa ou de terceiros devidamente autorizados.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          6.2 Fica expressamente proibida a cópia, distribuição ou uso não
          autorizado de qualquer conteúdo presente neste site, sujeitando-se o
          infrator a medidas legais cabíveis.
        </p>
        <h2 className={styles["politicas__subtitulo"]}>7. TERMOS</h2>
        <p className={styles["politicas__paragrafo"]}>
          7.1 Temos o direito de alterar estes Termos de Serviços a qualquer
          momento, desde que seja fornecido um aviso prévio em nosso site.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          7.2 Se você continuar usando o site após as alterações, isso significa
          que você aceita as modificações feitas.
        </p>
        <h2 className={styles["politicas__subtitulo"]}>8. CERTIFICADO SSL </h2>
        <p className={styles["politicas__paragrafo"]}>
          8.1 Na Vinki todas as páginas são seguras, todos os dados são
          criptografados, garantindo total segurança aos seus dados e
          transações.
        </p>
        <h2 className={styles["politicas__subtitulo"]}>9. COMPARTILHAMENTO DE INFORMAÇÕES</h2>
        <p className={styles["politicas__paragrafo"]}>
          9.1 Suas informações pessoais são tratadas com o máximo de cuidado e
          confidencialidade, a Vinki não compartilha, aluga ou vende seus dados.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          9.2 Utilizamos medidas de segurança avançadas para salvaguardar suas
          informações contra acesso não autorizado, uso indevido ou divulgação,
          assegurando que você possa desfrutar de todo o conteúdo e
          funcionalidades do nosso site com tranquilidade.
        </p>
        <h2 className={styles["politicas__subtitulo"]}>10. EMAIL DE OFERTAS</h2>
        <p className={styles["politicas__paragrafo"]}>
          10.1 O envio de e-mails contendo ofertas e promoções será realizado
          exclusivamente com o seu consentimento expresso. A sua confiança é
          fundamental para nós, e nós não enviaremos nenhum e-mail de marketing
          ou promoções sem que você tenha optado por recebê-los previamente.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          10.2 Em nosso site, somos veementemente contra o envio de e-mails não
          solicitados ou sem autorização prévia. Ao se cadastrar em nosso site,
          você pode optar por receber nossos e-mails de nossa parte ou não.
        </p>
        <h2 className={styles["politicas__subtitulo"]}>11. ENVIOS DE EMAIL</h2>
        <p className={styles["politicas__paragrafo"]}>
          11.1 A Vinki nunca envia e-mails solicitando confirmação de e-mail por
          meio de anexos executáveis ou links de downloads.
        </p>
        <p className={styles["politicas__paragrafo"]}>
          11.2 Caso receba algum e-mail suspeito em nosso nome, solicitando
          ações incomuns ou suspeitas, pedimos que não abra anexos nem clique em
          links contidos nesses e-mails. Recomendamos que você entre em contato
          conosco diretamente para verificar a autenticidade da mensagem, caso
          tenha dúvidas.
        </p>

        <span className={styles["politicas__span"]}>
          ESTES TERMOS DE SERVIÇO ENTRAM EM VIGOR A PARTIR DA DATA DE SUA
          ACEITAÇÃO E APLICAM-SE A TODAS AS COMPRAS E USO DO NOSSO SITE. CASO
          TENHA ALGUMA DÚVIDA OU PREOCUPAÇÃO SOBRE OS TERMOS APRESENTADOS, POR
          FAVOR, ENTRE EM CONTATO CONOSCO PARA ESCLARECIMENTOS ADICIONAIS.
        </span>
        <p className={styles["politicas__paragrafo--att"]}>Att, Lojas Vinki.</p>
      </div>
    </section>
  );
}
