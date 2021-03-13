import Link from 'next/link';

import CategoryDropdown from './CategoryDropdown';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>DSA Blog</h1>
        </a>
      </Link>
      <CategoryDropdown />
    </header>
  )
};

export default Navbar;