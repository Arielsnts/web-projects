import { alta, recentes } from '../../../data/posts';
import styles from './page.module.css';

export default function Page({ params }: { params: { slug: string } }) {
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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet commodi earum dignissimos odio, nostrum alias quis quasi? Vitae molestiae, eveniet, maiores tempore magnam sunt, cumque dolorem pariatur incidunt id expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae, modi explicabo atque repellat quam hic rerum nobis beatae sequi aliquid dolore animi molestiae, repellendus aperiam nihil quod veniam quos?</p>
                <h2>Titulo</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet commodi earum dignissimos odio, nostrum alias quis quasi? Vitae molestiae, eveniet, maiores tempore magnam sunt, cumque dolorem pariatur incidunt id expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae, modi explicabo atque repellat quam hic rerum nobis beatae sequi aliquid dolore animi molestiae, repellendus aperiam nihil quod veniam quos?</p>
                <h2>Titulo</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet commodi earum dignissimos odio, nostrum alias quis quasi? Vitae molestiae, eveniet, maiores tempore magnam sunt, cumque dolorem pariatur incidunt id expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae, modi explicabo atque repellat quam hic rerum nobis beatae sequi aliquid dolore animi molestiae, repellendus aperiam nihil quod veniam quos?</p>
                <a href="/" className={styles.voltar}>VOLTAR</a>
            </div>
        </div>
    );
}



export async function generateStaticParams() {
  const allPosts = alta.concat(recentes);
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}