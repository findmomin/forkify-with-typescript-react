import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from '../styles/Recipe.module.css';
import * as Types from '../Types';
import Spinner from './styled/Spinner';

const Recipe = () => {
  // Getting the search query from the url
  const {
    params: { query, recipeId },
  } = useRouteMatch<{ query: string; recipeId: string }>('/:query/:recipeId')!;

  // For redirecting user to search route
  const history = useHistory();

  // State
  const [recipe, setRecipe] = useState<Types.Recipe>();

  // Setting the query in the context if the query is new
  useEffect(() => {
    if (!recipeId) return;

    // Clearing old recipe (if any)
    setRecipe(undefined);

    // Gets the recipe for a given id
    const getRecipe = async () => {
      const res: {
        status: string;
        data: { recipe: Types.Recipe };
      } = await (
        await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
        )
      ).json();

      if (res.status !== 'success') {
        alert('Error loading recipe :(');
        return history.push(`/${query}`);
      }

      // Storing new recipe
      setRecipe(res.data.recipe);
    };

    getRecipe();
  }, [recipeId, history]);

  return (
    <div className={styles.Recipe}>
      <div>{recipe ? <h1>{recipe.title}</h1> : <Spinner />}</div>
    </div>
  );
};

export default Recipe;
