import { useHistory } from 'react-router-dom';
import styles from '../styles/SearchForm.module.css';
import icons from '../Images/icons.svg';
import useInput from '../hooks/useInput';

const SearchForm = () => {
  // History
  const history = useHistory();

  // State
  const [value, setValue] = useInput('');

  const handleChange = (e: React.ChangeEvent) =>
    setValue((e.target as HTMLInputElement).value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const [, , recipeId] = history.location.pathname.split('/');

    // Setting the route
    history.push(`/${value}${recipeId ? `/${recipeId}` : ''}`);

    // Resetting the input
    setValue('');
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
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
