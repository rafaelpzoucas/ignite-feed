import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './styles.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rafaelpzoucas.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Zoucas</strong>
                            <time title='20 de setembro às 00h55' dateTime='2022-08-20 00:55:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span> 20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}