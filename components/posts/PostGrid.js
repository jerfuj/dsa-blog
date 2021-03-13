import PostCard from './PostCard';

import styles from './PostGrid.module.css';

const PostGrid = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
};

export default PostGrid;