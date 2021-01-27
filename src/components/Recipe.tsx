import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import icons from '../Images/icons.svg';
import styles from '../styles/Recipe.module.css';
import * as Types from '../Types';
import Spinner from './styled/Spinner';

const Recipe = () => {
  // Getting the search query from the url
  const {
    params: { recipeId },
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
        return history.goBack();
      }

      // Storing new recipe
      setRecipe(res.data.recipe);
    };

    getRecipe();
  }, [recipeId, history]);

  const ingredients = recipe?.ingredients.map(
    ({ description, quantity, unit }) => (
      <li className={styles.Ingredient} key={uuid()}>
        <svg>
          <use href={`${icons}#icon-check`}></use>
        </svg>
        <div className={styles.Quantity}> {quantity}</div>
        <div>
          <span>{unit}</span>
          {description}
        </div>
      </li>
    )
  );

  const markup = (
    <div className={styles.Recipe}>
      <figure className={styles.Figure}>
        <img
          src={recipe?.image_url}
          alt={recipe?.title}
          className={styles.Image}
        />
        <h1 className={styles.Title}>
          <span>{recipe?.title}</span>
        </h1>
      </figure>

      <div className={styles.Details}>
        <div className={styles.Info}>
          <svg>
            <use href={`${icons}#icon-clock`}></use>
          </svg>
          <span className={styles.InfoData}>{recipe?.cooking_time}</span>
          <span>minutes</span>
        </div>
        <div className={styles.Info}>
          <svg>
            <use href={`${icons}#icon-users`}></use>
          </svg>
          <span className={styles.InfoData}>{recipe?.servings}</span>
          <span>servings</span>

          <div className={styles.Btns}>
            <button className={styles.Btn}>
              <svg>
                <use href={`${icons}#icon-minus-circle`}></use>
              </svg>
            </button>
            <button className={styles.Btn}>
              <svg>
                <use href={`${icons}#icon-plus-circle`}></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.UserGenerated}>
          <svg>
            <use href={`${icons}#icon-user`}></use>
          </svg>
        </div>
        <button className={styles.BtnRound}>
          <svg className="">
            <use href={`${icons}#icon-bookmark`}></use>
          </svg>
        </button>
      </div>

      <div className={styles.Ingredients}>
        <h2>Recipe ingredients</h2>
        <ul className={styles.IngredientList}>{ingredients}</ul>
      </div>

      <div className={styles.Directions}>
        <h2>How to cook it</h2>
        <p className={styles.DirectionsText}>
          This recipe was carefully designed and tested by
          <span className={styles.Publisher}> {recipe?.publisher}</span>. Please
          check out directions at their website.
        </p>
        <a
          className={styles.BtnDirections}
          href={recipe?.source_url}
          target="_blank"
          rel="noreferrer"
        >
          <span>Directions</span>
          <svg>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className={styles.Recipe}>
      <div>{recipe ? markup : <Spinner />}</div>
    </div>
  );
};

export default Recipe;
