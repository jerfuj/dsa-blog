import PostGrid from './PostGrid';

import styles from './RecentPosts.module.css';

const RecentPosts = ({ posts }) => {

  return (
    <section className={styles.postsContainer}>
      <h2 className={styles.header}>Latest Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
};

export default RecentPosts;