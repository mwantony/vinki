import { ReactComponent as ProfileMenu } from "../../assets/svg/profile-menu.svg";

interface Props {
    nome: string | null
}

export default function MinhaConta({nome}: Props) {
    return(
        <section>
            <div>
            <ProfileMenu></ProfileMenu>
            <h2>Bem vindo, {nome}</h2>
            </div>
        </section>
    )
}