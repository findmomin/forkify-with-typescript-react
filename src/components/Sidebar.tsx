import styles from '../styles/Sidebar.module.css';
import icons from '../Images/icons.svg';
import Message from './styled/Message';

export default function SearchResults() {
  return (
    <div className={styles.Sidebar}>
      {/* Message */}
      <Message>
        <svg>
          <use href={`${icons}#icon-smile`}></use>
        </svg>
        <p>Search for a recipe to get search results!</p>
      </Message>

      {/* Search Results */}

      {/* Footer text */}
      <p className={styles.Copyright}>&copy; by Abdul Momin</p>
    </div>
  );
}
