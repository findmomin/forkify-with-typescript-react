import React, { useContext, useRef } from 'react';
import { UploadRecipeFormContext } from '../contexts/UploadRecipeForm.context';
import icons from '../Images/icons.svg';
import styles from '../styles/UploadRecipeForm.module.css';
import * as Types from '../Types';

// 8bb2ccdd-2e9f-4422-86c8-8c8b43cd111b

const UploadRecipeForm = () => {
  // Consuming context
  const { toggleOverlay } = useContext(UploadRecipeFormContext);

  // Form element
  const form = useRef<HTMLFormElement>(null);

  // Upload the recipe
  const uploadRecipe = async (recipe: string) => {
    console.log(recipe);

    return 'hi';
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

    // Uploading the recipe
    await uploadRecipe(JSON.stringify(recipe));
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
          <input value="TEST23" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="source_url" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cooking_time" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>
        <div className={styles.Column}>
          <h3 className="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
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
