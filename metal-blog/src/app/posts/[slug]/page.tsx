import { alta, recentes } from '../../../data/posts'
import styles from './page.module.css'

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PostPageProps) {
  const slug = params.slug;

  const allPosts = alta.concat(recentes);
  const post = allPosts.find(post => post.slug === slug);

  return (
    <div className={styles.principal}>
      <h1>{post?.title}</h1>
      <h2>{post?.subtitle}</h2>
      <img src={post?.coverImage} alt="cover" />
      <p>{post?.album} - {post?.date}</p>
      <div className={styles.text}>
        <p>{post?.content}</p>
        <h2>Titulo</h2>
        <p>...</p>
        <a href="/" className={styles.voltar}>VOLTAR</a>
      </div>
    </div>
  );
}
