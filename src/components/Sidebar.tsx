import { Switch, Route } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';
import icons from '../Images/icons.svg';
import Message from './styled/Message';

export default function SearchResults() {
  return (
    <div className={styles.Sidebar}>
      <Switch>
        {/* Message */}
        <Route
          exact
          path="/"
          render={() => (
            <Message>
              <svg>
                <use href={`${icons}#icon-smile`}></use>
              </svg>
              <p>Search for a recipe to get search results!</p>
            </Message>
          )}
        />
      </Switch>

      {/* Search Results */}
      <Route path="/:query" render={() => <h1>Results here</h1>} />

      {/* Footer text */}
      <p className={styles.Copyright}>&copy; by Abdul Momin</p>
    </div>
  );
}
