import PostDetails from '../../components/posts/PostDetails';
import { getPostData, getPostFiles } from '../../lib/postHelpers';


const FullPostPage = ({ postData }) => {
  return (
    <PostDetails postData={postData} />
  )
};

export const getStaticProps = ({ params }) => {
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = () => {
  const filenames = getPostFiles();

  const slugs = filenames.map(name => (
    name.replace(/\.md$/, '')
  ));

  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: false
  }
}

export default FullPostPage;