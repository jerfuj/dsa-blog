import AllPosts from '../../components/posts/AllPosts';

import { getPostData, getPostFiles } from '../../lib/postHelpers';

export default function CategoryPage({ posts, category }) {
  return (
    <AllPosts posts={posts} category={category} />
  )
}

export const getStaticProps = () => {
  let posts = getPostFiles('problem-solving-patterns');

  posts = posts.map((post) => (
    getPostData('problem-solving-patterns', post)
  ))

  return {
    props: {
      posts,
      category: 'Problem Solving Patterns'
    }
  }
}


