import { Switch, Route } from 'react-router-dom';
import styles from '../styles/RecipeContainer.module.css';
import Message from './styled/Message';
import icons from '../Images/icons.svg';
import Recipe from './Recipe';

const RecipeContainer = () => {
  return (
    <div className={styles.RecipeContainer}>
      <Switch>
        {/* Recipe */}
        <Route exact path="/:query/:recipeId" render={() => <Recipe />} />

        {/* Message */}
        <Message>
          <svg>
            <use href={`${icons}#icon-smile`}></use>
          </svg>
          <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </Message>
      </Switch>
    </div>
  );
};

export default RecipeContainer;
