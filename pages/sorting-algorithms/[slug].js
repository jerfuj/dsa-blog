import PropTypes from 'prop-types';
import PostDetails from '../../components/posts/PostDetails';
import { getPostData, getPostFiles } from '../../lib/postHelpers';

const FullPostPage = ({ postData }) => (
  <PostDetails postData={postData} />
);

export const getStaticProps = (context) => {
  const { slug } = context.params;

  const postData = getPostData('sorting-algorithms', slug);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = () => {
  const files = getPostFiles('sorting-algorithms');

  const slugs = files.map((file) => (
    file.replace(/\.md$/, '')
  ));

  const paths = slugs.map((slug) => (
    { params: { slug } }
  ));

  return {
    paths,
    fallback: false,
  };
};
export default FullPostPage;

FullPostPage.propTypes = {
  postData: PropTypes.instanceOf(Object).isRequired,
};
