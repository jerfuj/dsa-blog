import RecentPosts from '../components/posts/RecentPosts';

import { getPostData, getPostFiles } from '../lib/postHelpers';

// import { posts } from '../dummyData';

export default function Home({ posts }) {
  return (
    <RecentPosts posts={posts}/>
  )
}

export const getStaticProps = () => {
  let posts = getPostFiles();

  posts = posts.map((post) => (
    getPostData(post)
  ))

  return {
    props: {
      posts
    }
  }
}


