import styles from './Rodape.module.scss'
import vinkiFooterMobile from '../../assets/img/vinki-footer-mobile.png'
export default function Rodape() {
    return(
        <footer className={styles.rodape}>
            <div className={styles['rodape__informacoes']}>
                <div className={styles['rodape__dep']}>
                    <h2 className={styles['rodape__subtitulo']}>Formas de pagamento</h2>
                    <ul className={styles['rodape__lista']}>
                        <li className={styles['rodape__item']}>&nbsp;Pix</li>
                        <li className={styles['rodape__item']}>&nbsp;Boleto</li>
                        <li className={styles['rodape__item']}>&nbsp;Cartão de débito/crédito</li>
                    </ul>
                </div>
                <div className={styles['rodape__dep']}>
                    <h2 className={styles['rodape__subtitulo']}>Mídias socias</h2>
                    <ul className={styles['rodape__lista']}>
                        <li className={styles['rodape__item']}>&nbsp;WhatsApp</li>
                        <li className={styles['rodape__item']}>&nbsp;Facebook</li>
                        <li className={styles['rodape__item']}>&nbsp;Instagram</li>
                        <li className={styles['rodape__item']}>&nbsp;Twitter</li>
                    </ul>
                </div>
                <div className={styles['rodape__dep']}>
                    <h2 className={styles['rodape__subtitulo']}>Atendimento</h2>
                    <ul className={styles['rodape__lista']}>
                        <li className={styles['rodape__item']}>&nbsp;0800 589 356</li>
                        <li className={styles['rodape__item']}>&nbsp;faleconosco@vinki.com</li>
                    </ul>
                </div>
            </div>
            <div className={styles['rodape__marca']}>
                <img src={vinkiFooterMobile} alt="" className={styles['rodape__imagem']} />
                <p className={styles['rodape__copy']}>© Copyright Vinki 2023. Todos os direitos reservados</p>
            </div>
        </footer>
    )
}