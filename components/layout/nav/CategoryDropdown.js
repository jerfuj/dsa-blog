import { useContext } from 'react';
import DropdownContext from '../../../context/DropdownContext';

import CategoryList from './CategoryList';

import styles from './CategoryDropdown.module.css';

const CategoryDropdown = () => {
  const dropdownCtx = useContext(DropdownContext);

  return (
    <div className={styles.btnAndList}>
      <button type="button" className={styles.btn} onClick={dropdownCtx.toggleDropdown}>
        Menu
      </button>
      {dropdownCtx.showDropdown && <CategoryList />}
    </div>
  );
};

export default CategoryDropdown;
