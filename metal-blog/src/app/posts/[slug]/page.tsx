import { alta, recentes } from '../../../data/posts';
import styles from './page.module.css';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const allPosts = alta.concat(recentes);
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const allPosts = alta.concat(recentes);
  const post = allPosts.find((p) => p.slug === slug);

  return (
    <div className={styles.principal}>
      <h1>{post?.title}</h1>
      <h2>{post?.subtitle}</h2>
      <img src={post?.coverImage} alt="cover" />
      <p>{post?.album} - {post?.date}</p>
      <div className={styles.text}>
        <p>{post?.content}</p>
        <a href="/" className={styles.voltar}>VOLTAR</a>
      </div>
    </div>
  );
}
