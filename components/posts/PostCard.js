import Image from 'next/image';
import Link from 'next/link';

import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  const { title, excerpt, image, date, slug } = post;

  return (
    <div className={styles.cardContainer}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.img}>
            <Image src={image} height={200} width={300}/>
          </div>
          <div className={styles.text}>
            <h3>{title}</h3>
            <time>{date}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </div>
  )
};

export default PostCard;