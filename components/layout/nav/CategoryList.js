import { useEffect, useContext, useRef } from 'react';
import DropdownContext from '../../../context/DropdownContext';

import CategoryListItem from './CategoryListItem';

import styles from './CategoryList.module.css';

const categories = [
  { name: 'Toy Problems', slug: 'toy-problems'},
  { name: 'Problem Solving patterns', slug: 'problem-solving-patterns'},
  { name: 'Sorting Algorithms', slug: 'sorting-algorithms'},
  { name: 'Data Structures', slug: 'data-structures'},
]

const CategoryList = () => {
  const dropdownCtx = useContext(DropdownContext);
  const listRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!listRef.current) {
        document.removeEventListener('click', handleOutsideClick);
      } else {
        if (!listRef.current.contains(e.target)) {
          dropdownCtx.closeDropdown();
        }
      }
    }
    document.addEventListener('click', handleOutsideClick);
  }, [])

  return (
    <ul className={styles.container} ref={listRef}>
      {categories.map((cat, i) => (
        <CategoryListItem key={i} cat={cat} />
      ))}
    </ul>
  )
};

export default CategoryList;