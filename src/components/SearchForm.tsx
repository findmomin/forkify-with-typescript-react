import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from '../styles/SearchForm.module.css';
import icons from '../Images/icons.svg';
import useInput from '../hooks/useInput';

const SearchForm = () => {
  // Getting the recipe id from the url (if any)
  const match = useRouteMatch<{ recipeId: string }>('/:query/:recipeId');

  // History
  const history = useHistory();

  // State
  const [value, setValue] = useInput('');

  const handleChange = (e: React.ChangeEvent) =>
    setValue((e.target as HTMLInputElement).value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Setting the route
    history.push(
      `/${value}${match?.params.recipeId ? `/${match.params.recipeId}` : ''}`
    );

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
