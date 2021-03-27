import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './Home.module.css';

const Home = ({ links }) => (
  <div className={styles.home}>
    <div className={styles.container}>
      <h1 className={styles.header}>Useful Links</h1>
      <div>
        {links.map((link) => (
          <div
            key={link.id}
            className={styles.linkContainer}
          >
            <a
              href={link.url}
              className={styles.imgContainer}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={link.image}
                alt={link.name}
                width={480}
                height={300}
              />
            </a>
            <div className={styles.textContainer}>
              <a
                href={link.url}
                className={styles.name}
                target="_blank"
                rel="noreferrer"
              >
                <h2>{link.name}</h2>
              </a>
              <p>{link.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Home;

Home.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
};
