/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  const {
    title,
    excerpt,
    category,
    slug,
  } = post;

  return (
    <div className={styles.cardContainer}>
      <Link href={`/${category}/${slug}`}>
        <a>
          <div className={styles.text}>
            <div className={styles.title}>
              <h3>{title}</h3>
            </div>
            <div className={styles.excerpt}>
              <p>{excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;

PostCard.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};
