import { useState, useRef } from 'react';

import SearchResults from './SearchResults';

import styles from './Search.module.css';

const Search = () => {
  const inputRef = useRef();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [delay, setDelay] = useState();
  const [focus, setFocus] = useState(false);

  const emptyResults = () => {
    setQuery('');
    setResults([]);
  };

  const search = (q) => {
    fetch(`/api/search?q=${q}`)
      .then((res) => res.json())
      .then((res) => {
        setResults(res.results);
      });
  };

  const handleQueryChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    if (delay) {
      clearTimeout(delay);
    }
    setDelay(setTimeout(() => {
      search(q);
    }, 300));
  };

  const handleOutsideClick = (e) => {
    if (!inputRef.current.contains(e.target)) {
      setFocus(false);
      document.removeEventListener('click', handleOutsideClick);
    }
  };

  const onInputFocus = () => {
    setFocus(true);
    document.addEventListener('click', handleOutsideClick);
  };

  return (
    <div className={styles.container} ref={inputRef}>
      <form className={styles.search}>
        <input
          type="text"
          placeholder="search"
          onChange={handleQueryChange}
          className={styles.input}
          value={query}
          onFocus={onInputFocus}
        />
        {focus && results[0] && <SearchResults results={results} emptyResults={emptyResults} />}
      </form>
    </div>
  );
};

export default Search;
