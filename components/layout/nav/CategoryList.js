import CategoryListItem from './CategoryListItem';

import styles from './CategoryList.module.css';

const categories = [
  { name: 'Toy Problems', slug: 'toy-problems'},
  { name: 'Problem Solving patterns', slug: 'problem-solving-patterns'},
  { name: 'Sorting Algorithms', slug: 'sorting-algorithms'},
  { name: 'Data Structures', slug: 'data-structures'},
]

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((cat, i) => (
        <CategoryListItem key={i} cat={cat} />
      ))}
    </div>
  )
};

export default CategoryList;