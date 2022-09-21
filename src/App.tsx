import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { SideBar } from './components/Sidebar'
import { Post } from './components/Post'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
