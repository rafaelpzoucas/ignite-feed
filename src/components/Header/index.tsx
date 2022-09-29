import styles from './styles.module.css'

import logoPNG from '../../../public/logo.png'

export function Header() {
    return (
        <strong className={styles.header}>
            <img src={logoPNG} alt="Logo do ignite feed" />
        </strong>
    )
}