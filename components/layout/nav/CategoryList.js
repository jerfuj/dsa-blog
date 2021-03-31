import { useEffect, useContext, useRef } from 'react';
import DropdownContext from '../../../context/DropdownContext';
import CategoryListItem from './CategoryListItem';
import styles from './CategoryList.module.css';

const categories = [
  { name: 'Home', slug: '' },
  { name: 'Toy Problems', slug: 'toy-problems' },
  { name: 'Sorting Algorithms', slug: 'sorting-algorithms' },
  { name: 'Data Structures', slug: 'data-structures' },
];

const CategoryList = () => {
  const dropdownCtx = useContext(DropdownContext);
  const listRef = useRef();

  /**
   * handleOutsideClick is a dynamic click handler that is added to the document
   * each time this component is mounted
   * It allows the ability to close the menu by clicking anywhere outside of it
   * The second conditional contains the main logic to closing the menu
   * The first conditional is there in case the menu was already closed through a different method
   */
  const handleOutsideClick = (e) => {
    if (!listRef.current) {
      document.removeEventListener('click', handleOutsideClick);
    } else if (!listRef.current.contains(e.target)) {
      dropdownCtx.closeDropdown();
      document.removeEventListener('click', handleOutsideClick);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <ul className={styles.container} ref={listRef}>
      {categories.map((cat) => (
        <CategoryListItem key={cat.slug} cat={cat} />
      ))}
    </ul>
  );
};

export default CategoryList;
