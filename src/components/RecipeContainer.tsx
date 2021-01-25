import { Switch, Route } from 'react-router-dom';
import styles from '../styles/RecipeContainer.module.css';
import Message from './styled/Message';
import icons from '../Images/icons.svg';

export default function Recipe() {
  return (
    <div className={styles.RecipeContainer}>
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
              <p>Start by searching for a recipe or an ingredient. Have fun!</p>
            </Message>
          )}
        />

        {/* Recipe */}
        <Route
          exact
          path="/:id"
          render={() => {
            return <h1>Recipe</h1>;
          }}
        />
      </Switch>
    </div>
  );
}
