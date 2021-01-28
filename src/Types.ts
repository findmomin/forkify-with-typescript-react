export interface Result {
  id: string;
  key?: string;
  query: string;
  title: string;
  image_url: string;
  publisher: string;
}

export type Results = Result[];

interface Ingredient {
  quantity: number | null;
  unit: string;
  description: string;
}

export type Ingredients = Ingredient[];

export interface UserReicpe {
  id?: string;
  title: string;
  source_url: string;
  image_url: string;
  servings: number;
  cooking_time: number;
  publisher: string;
  ingredients: Ingredient[];
}

export interface Recipe extends UserReicpe {
  id: string;
  key?: string;
}

export interface BookmarksActions {
  type: 'ADD';
  bookmark: Result;
}
