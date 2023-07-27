import classNames from "classnames"
import styles from './Notificacao.module.scss'
interface Props {
    msg: any
    mostrarNotificacao: any
    setMostrarNotificacao: any
}

export default function Notificao({msg, mostrarNotificacao, setMostrarNotificacao}: Props) {
        <>
            <div className={classNames({
                [styles['notificacao']]: true,
                [styles['notificacao--mostrar']]: mostrarNotificacao,
            })}>
                {msg}
            </div>
        </>
}