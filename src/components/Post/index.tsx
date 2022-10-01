import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'

interface Author {
    avatarUrl: string
    name: string
    role: string
}

interface Content {
    type: string
    content: string
}[]

interface PostProps {
    author: Author
    content: Content[]
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

    function handleCreateNewComment(event: FormEvent) {
        event?.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity("")
        setNewCommentText(event?.target.value)
    }

    function handleNewCommentinvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity("Esse campo é obrigatório")
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                    onInvalid={handleNewCommentinvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
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
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}