import PropTypes from 'prop-types';
import AllPosts from '../../components/posts/AllPosts';
import { getPostData, getPostFiles } from '../../lib/postHelpers';

export default function CategoryPage({ posts, category }) {
  return (
    <AllPosts posts={posts} category={category} />
  );
}

export const getStaticProps = () => {
  let posts = getPostFiles('toy-problems');

  posts = posts.map((post) => (
    getPostData('toy-problems', post)
  ));

  return {
    props: {
      posts,
      category: 'Toy Problems'
    },
  };
};

CategoryPage.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
  category: PropTypes.string.isRequired,
};
