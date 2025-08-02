import Link from 'next/link';
import { alta, recentes } from '../data/posts';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.principal}>
      <div className={styles.containerPosts}>
        <h1>EM ALTA</h1>
        {alta.map(post => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className={styles.postContent}>
            <img src={post.coverImage} alt="cover" style={{ width: '130px', height: '130px' }} />
            <div className={styles.text}>
              <h2>{post.title}</h2>
              <p>{post.subtitle}</p>
            </div>
          </Link>
        ))}
        <h1>RECENTES</h1>
        {recentes.map(post => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className={styles.postContent}>
            <img src={post.coverImage} alt="cover" style={{ width: '130px', height: '130px' }} />
            <div className={styles.text}>
              <h2>{post.title}</h2>
              <p>{post.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.containerMenu}>
        <h1>MENU</h1>
        <a href="#">Login</a>
        <a href="#">Instagram</a>
        <a href="#">X / Twitter</a>
        <a href="#">Veja mais</a>
      </div>
    </div>
  )
}
