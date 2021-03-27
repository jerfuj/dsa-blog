import PropTypes from 'prop-types';
import PostGrid from './PostGrid';

import styles from './AllPosts.module.css';

const AllPosts = ({ posts, category }) => (
  <section className={styles.postsContainer}>
    <h2 className={styles.header}>{category}</h2>
    <PostGrid posts={posts} />
  </section>
);

AllPosts.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  category: PropTypes.string.isRequired,
};

export default AllPosts;
