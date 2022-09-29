import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { SideBar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafaelpzoucas.png',
      name: 'Rafael Zoucas',
      role: 'CEO Helix'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 😎' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsam velit libero sunt impedit eos explicabo dignissimos, labore quasi corporis iste necessitatibus inventore ut iure dolore perspiciatis omnis, itaque commodi!' },
      { type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-05-03 20:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rafaelpzoucas.png',
      name: 'Gabi Souza',
      role: 'CEO Helix'
    },
    content: [
      { type: 'paragraph', content: 'Iae 😎' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsam velit libero sunt impedit eos explicabo dignissimos, labore quasi corporis iste necessitatibus inventore ut iure dolore perspiciatis omnis, itaque commodi!' },
      { type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2022-05-10 20:30:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
