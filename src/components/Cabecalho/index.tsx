import styles from './Cabecalho.module.scss'

import {ReactComponent as MenuItem} from '../../assets/svg/menu-item.svg'
import {ReactComponent as Vinki} from '../../assets/svg/vinki.svg'
import {ReactComponent as Profile} from '../../assets/svg/profile.svg'
import {ReactComponent as Cart} from '../../assets/svg/cart.svg'
export default function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <nav className={styles.navegacao}>
                <MenuItem className={styles['navegacao__menu']}></MenuItem>
                <Vinki className={styles['navegacao__logo']}></Vinki>
                <input type="search" name="" id="" className={styles['navegacao__search']} placeholder='Busque aqui'/>
                <div className={styles['navegacao__account']}>
                    <Profile className={styles['navegacao__profile']}></Profile>
                    <Cart className={styles['navegacao__cart']}></Cart>
                </div>
            </nav>
        </header>
    )
}