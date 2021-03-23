import PropTypes from 'prop-types';
import Home from '../components/home/Home';
import { getAllPosts } from '../lib/postHelpers';

const HomePage = ({ posts }) => (
  <Home />
);

export default HomePage;

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

HomePage.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
};
