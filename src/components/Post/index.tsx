import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src='https://github.com/rafaelpzoucas.png' />
                    <div className={styles.authorInfo}>
                        <strong>Rafael Zoucas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='20 de setembro às 00h55' dateTime='2022-08-20 00:55:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 😎</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsam velit libero sunt impedit eos explicabo dignissimos, labore quasi corporis iste necessitatibus inventore ut iure dolore perspiciatis omnis, itaque commodi!</p>
                <p>👉 <a href="#"> jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>
                    <a href='#'> #nlw</a> 
                    <a href='#'> #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}