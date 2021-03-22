/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism/';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import styles from './PostDetails.module.css';

SyntaxHighlighter.registerLanguage('js', js);

const PostDetails = ({ postData }) => {
  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className={styles.imgContainer}>
            <Image
              src={`/images/${image.url}`}
              alt={image.alt}
              width={400}
              height={310}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          language={language}
          children={value}
          style={vscDarkPlus}
          className={styles.code}
        />
      );
    },
  };

  return (
    <div className={styles.container}>
      <h1>{postData.title}</h1>
      <ReactMarkdown renderers={customRenderers}>
        {postData.content}
      </ReactMarkdown>

    </div>
  );
};

export default PostDetails;

PostDetails.propTypes = {
  postData: PropTypes.instanceOf(Object).isRequired,
};
