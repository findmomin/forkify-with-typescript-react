import styles from '../styles/Navbar.module.css';
import logo from '../Images/logo.png';
import icons from '../Images/icons.svg';
import SearchForm from './SearchForm';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      {/* Logo */}
      <img src={logo} alt="Forkify Main Logo" className={styles.Logo} />

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
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
