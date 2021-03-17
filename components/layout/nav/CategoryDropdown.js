import { useState, useContext } from 'react';
import DropdownContext from '../../../context/DropdownContext';

import CategoryList from './CategoryList';

import styles from './CategoryDropdown.module.css';

const CategoryDropdown = () => {
  const dropdownCtx = useContext(DropdownContext);

  return (
    <div className={styles.btnAndList}>
      <button className={styles.btn} onClick={dropdownCtx.toggleDropdown}>
        Categories
      </button>
      {dropdownCtx.showDropdown && <CategoryList />}
    </div>
  )
};

export default CategoryDropdown;