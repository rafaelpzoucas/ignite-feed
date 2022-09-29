import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { LineSegment } from 'phosphor-react'
import { useState } from 'react'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'

interface PostProps {
    author: {
        avatarUrl: string
        name: string
        role: string
    }
    content: {
        type: string
        content: string
    }[]
    publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([
        'Post muito legal, boa, parabem'
    ]) 

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() {
        event?.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event?.target.value)
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if(item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}