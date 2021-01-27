import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../Images/logo.png';
import icons from '../Images/icons.svg';
import SearchForm from './SearchForm';
import Bookmarks from './Bookmarks';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Forkify Main Logo" className={styles.Logo} />
      </Link>

      {/* The search from */}
      <SearchForm />

      {/* Buttons */}
      <div className={styles.BtnsContainer}>
        <button className={styles.Btn}>
          <svg className={styles.Icon}>
            <use href={`${icons}#icon-edit`}></use>
          </svg>
          <span>Add Recipe</span>
        </button>

        <button className={styles.Btn}>
          <svg className={styles.Icon}>
            <use href={`${icons}#icon-bookmark`}></use>
          </svg>
          <span>Bookmarks</span>

          {/* Bookmarks container */}
          <div className={styles.Bookmarks}>
            <Bookmarks />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
