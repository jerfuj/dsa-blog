import { useState } from 'react';

import CategoryList from './CategoryList';

import styles from './CategoryDropdown.module.css';

const CategoryDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <button className={styles.btn} onClick={handleShowDropdown}>
      Categories
      {showDropdown && <CategoryList />}
    </button>
  )
};

export default CategoryDropdown;