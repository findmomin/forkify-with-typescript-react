import styles from '../styles/SearchForm.module.css';
import icons from '../Images/icons.svg';

const SearchForm = () => {
  return (
    <form className={styles.SearchForm}>
      <input
        className={styles.Input}
        type="text"
        required
        placeholder="Search for a recipe..."
      />
      <button type="submit" className={styles.Btn}>
        <svg className={styles.Icon}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
