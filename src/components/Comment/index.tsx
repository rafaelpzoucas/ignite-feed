import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'

import styles from './styles.module.css'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

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

                        <button
                            onClick={handleDeleteComment} 
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span> {likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}