import { Switch, Route } from 'react-router-dom';
import icons from '../Images/icons.svg';
import styles from '../styles/Sidebar.module.css';
import Message from './styled/Message';
import Results from './Results';

const Sidebar = () => {
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
      <Route path="/:query" render={() => <Results />} />

      {/* Footer text */}
      <p className={styles.Copyright}>&copy; by Abdul Momin</p>
    </div>
  );
};

export default Sidebar;
