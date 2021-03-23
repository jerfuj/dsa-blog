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
            <h3>{title}</h3>
            <p>{excerpt}</p>
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
