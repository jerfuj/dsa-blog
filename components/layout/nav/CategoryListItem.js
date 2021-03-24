/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Link from 'next/link';
import DropdownContext from '../../../context/DropdownContext';
import styles from './CategoryListItem.module.css';

const CategoryListItem = ({ cat }) => {
  const dropdownCtx = useContext(DropdownContext);

  return (
    <li
      className={styles.listItem}
      onClick={dropdownCtx.closeDropdown}
    >
      <Link href={`/${cat.slug}`}>
        {cat.name}
      </Link>
    </li>
  );
};

export default CategoryListItem;

CategoryListItem.propTypes = {
  cat: PropTypes.instanceOf(Object).isRequired,
};
