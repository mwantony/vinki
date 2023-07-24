import styles from './Rodape.module.scss'
import vinkiFooterMobile from '../../assets/img/vinki-footer-mobile.png'
import classNames from 'classnames'
export default function Rodape() {
    return(
        <footer className={styles.rodape}>
            <div className={styles['rodape__informacoes']}>
                <div className={classNames({

                    [styles['rodape__dep']]: true,
                    [styles['rodape__dep--desktop']]: true
                })}>
                    <h2 className={styles['rodape__subtitulo']}>Departamentos</h2>
                    <ul className={styles['rodape__lista']}>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--moveis']]: true,
                        })}>&nbsp;Móveis</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--eletronicos']]: true,
                        })}>&nbsp;Eletrônicos</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--decoracoes']]: true,
                        })}>&nbsp;Decorações</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--jardim']]: true,
                        })}>&nbsp;Jardim</li>
                    </ul>
                </div>
                <div className={styles['rodape__dep']}>
                    <h2 className={styles['rodape__subtitulo']}>Formas de pagamento</h2>
                    <ul className={styles['rodape__lista']}>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--pix']]: true,
                        })}>&nbsp;Pix</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--boleto']]: true,
                        })}>&nbsp;Boleto</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--cartao']]: true,
                        })}>&nbsp;Cartão de débito/crédito</li>
                    </ul>
                </div>
                <div className={styles['rodape__dep']}>
                    <h2 className={styles['rodape__subtitulo']}>Mídias socias</h2>
                    <ul className={styles['rodape__lista']}>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--whatsapp']]: true,
                        })}>&nbsp;WhatsApp</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--facebook']]: true,
                        })}>&nbsp;Facebook</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--instagram']]: true,
                        })}>&nbsp;Instagram</li>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--twitter']]: true,
                        })}>&nbsp;Twitter</li>
                    </ul>
                </div>
                <div className={styles['rodape__dep']}>
                    <h2 className={styles['rodape__subtitulo']}>Atendimento</h2>
                    <ul className={styles['rodape__lista']}>
                        <li className={classNames({
                            [styles['rodape__item']]: true,
                            [styles['rodape__item--sac']]: true,
                        })}>&nbsp;0800 589 356</li>
                        <a href="mailto:atendimento@vinki.com.br">
                            <li className={classNames({
                                [styles['rodape__item']]: true,
                                [styles['rodape__item--email']]: true,
                            })}>&nbsp;atendimento@vinki.com</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className={styles['rodape__marca']}>
                <a href="https://www.vinki.com.br/"><img src={vinkiFooterMobile} alt="" className={styles['rodape__imagem']} /></a>
                <p className={styles['rodape__copy']}>© Copyright Vinki 2023. Todos os direitos reservados</p>
            </div>
        </footer>
    )
}