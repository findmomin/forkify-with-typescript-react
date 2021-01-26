export interface Result {
  id: string;
  title: string;
  image_url: string;
  publisher: string;
}

export type Results = Result[];

interface Ingredient {
  quantity: number;
  unit: string;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  source_url: string;
  image_url: string;
  servings: number;
  cooking_time: number;
  publisher: string;
  ingredients: Ingredient[];
}
