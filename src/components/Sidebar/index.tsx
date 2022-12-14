import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './styles.module.css'

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1663524789622-e23bb37ee7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/rafaelpzoucas.png" />
                <strong>Rafael Zoucas</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}