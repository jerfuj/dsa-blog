import { useContext } from 'react';
import DropdownContext from '../../../context/DropdownContext';

import Link from 'next/link';

import styles from './CategoryListItem.module.css';

const CategoryListItem = ({ cat }) => {
  const dropdownCtx = useContext(DropdownContext);

  return (
    <li
      className={styles.listItem}
      onClick={dropdownCtx.closeDropdown}
    >
      <Link href={`/${cat.slug}`}>{cat.name}</Link>
    </li>
  )
};

export default CategoryListItem;