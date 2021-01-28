import React, { useContext, useRef } from 'react';
import { UploadRecipeFormContext } from '../contexts/UploadRecipeForm.context';
import { API_URL, API_KEY } from '../constants';
import icons from '../Images/icons.svg';
import styles from '../styles/UploadRecipeForm.module.css';
import * as Types from '../Types';
import { useHistory } from 'react-router-dom';

const UploadRecipeForm = () => {
  // Consuming context
  const { toggleOverlay } = useContext(UploadRecipeFormContext);

  const history = useHistory();

  // Form element
  const form = useRef<HTMLFormElement>(null);

  // Upload the recipe
  const uploadRecipe = async (userRecipe: Types.UserReicpe) => {
    try {
      const {
        data: { recipe },
      }: { data: { recipe: Types.UserReicpe } } = await (
        await fetch(`${API_URL}/?key=${API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userRecipe),
        })
      ).json();

      if (!recipe) return alert('Error creating recipe. Try again :(');

      return recipe;
    } catch (err) {
      return alert('Error creating recipe. Try again :(');
    }
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form data
    const data = [...new FormData(form.current!)];

    // Ingredients
    const ingredients: Types.Ingredients = data
      .filter(arr => arr[0].startsWith('ingredient-') && arr[1] !== '')
      .map(arr => {
        const [quantity, unit, description] = (arr[1] as string).split(',');

        return {
          quantity: quantity ? +quantity : null,
          unit,
          description,
        };
      });

    const recipeData = data
      .filter(arr => !arr[0].includes('ingredient-'))
      .reduce((acc, cur) => {
        return {
          ...acc,
          [cur[0]]: +cur[1] ? +cur[1] : cur[1],
        };
      }, {});

    const recipe: Types.UserReicpe = {
      ...(recipeData as Types.UserReicpe),
      ingredients,
    };

    // Uploading the recipe & receiving the result
    const createdRecipe = await uploadRecipe(recipe);

    // If we got back the recipe, close the window & clear the input fields
    if (createdRecipe) {
      // Hiding the recipe creator
      toggleOverlay!();

      // Resetting the inputs
      [...document.querySelectorAll('input')].forEach(
        input => (input.value = '')
      );

      // Redirecting user to the reicpe page
      history.push(
        `/${createdRecipe.title.replaceAll(' ', '-')}/${createdRecipe.id}`
      );
    }
  };

  return (
    <div
      className={styles.Window}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <button className={styles.BtnClose} onClick={toggleOverlay}>
        ×
      </button>
      <form className={styles.Form} onSubmit={handleSubmit} ref={form}>
        <div className={styles.Column}>
          <h3 className="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input required name="title" type="text" />
          <label>URL</label>
          <input required name="source_url" type="text" />
          <label>Image URL</label>
          <input required name="image_url" type="text" />
          <label>Publisher</label>
          <input required name="publisher" type="text" />
          <label>Prep time</label>
          <input required name="cooking_time" type="number" />
          <label>Servings</label>
          <input required name="servings" type="number" />
        </div>
        <div className={styles.Column}>
          <h3 className="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>
        <button className={styles.BtnUpload}>
          <svg>
            <use href={`${icons}#icon-upload-cloud`}></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>
  );
};

export default UploadRecipeForm;
