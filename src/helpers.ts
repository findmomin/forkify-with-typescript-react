import { API_URL, API_KEY } from './constants';
import * as Types from './Types';

// Gets the results for a query
export const getResults = async (query: string) => {
  try {
    const {
      results,
      data: { recipes },
    }: { results: number; data: { recipes: Types.Results } } = await (
      await fetch(`${API_URL}?search=${query}&key=${API_KEY}`)
    ).json();

    if (!results) {
      return alert('No recipes found :(');
    }

    return recipes;
  } catch (err) {
    alert('No recipes found :(');
  }
};

export const getRecipe = async () => {
  //
};

export const uploadRecipe = async (userRecipe: Types.UserReicpe) => {
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
