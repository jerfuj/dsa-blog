import Link from 'next/link';

import styles from './CategoryListItem.module.css';

const CategoryListItem = ({ cat }) => {
  return (
    <li className={styles.listItem}>
      <Link href={`/${cat.slug}`}>{cat.name}</Link>
    </li>
  )
};

export default CategoryListItem;