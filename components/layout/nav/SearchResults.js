/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './SearchResults.module.css';

const SearchResults = ({ results, emptyResults }) => (
  <ul className={styles.list} onClick={emptyResults}>
    {results.map((result) => (
      <li key={result.id}>
        <Link href={`/${result.category}/${result.id}`}>
          <a>
            {result.title}
          </a>
        </Link>
      </li>
    ))}
  </ul>
);

SearchResults.propTypes = {
  results: PropTypes.instanceOf(Array).isRequired,
  emptyResults: PropTypes.instanceOf(Function).isRequired,
};

export default SearchResults;
