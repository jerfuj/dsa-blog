import Image from 'next/image';
import Link from 'next/link';

import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  const { title, excerpt, image, category, slug } = post;

  const imgSrc = `/images/${image}`;

  return (
    <div className={styles.cardContainer}>
      <Link href={`/${category}/${slug}`}>
        <a>
          {/* <div className={styles.img}>
            <Image src={imgSrc} height={120} width={200} layout="responsive"/>
          </div> */}
          <div className={styles.text}>
            <h3>{title}</h3>
            <p>{excerpt}</p>
          </div>
          <p className={styles.category}>{category}</p>
        </a>
      </Link>
    </div>
  )
};

export default PostCard;