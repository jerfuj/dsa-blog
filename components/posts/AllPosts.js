import PostGrid from './PostGrid';

import styles from './AllPosts.module.css';

const AllPosts = ({ posts, category }) => {

  return (
    <section className={styles.postsContainer}>
      <h2 className={styles.header}>{category}</h2>
      <PostGrid posts={posts} />
    </section>
  )
};

export default AllPosts;