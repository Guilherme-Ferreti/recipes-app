import type { Recipe } from '@/types/Recipe';

export default class RecipeService {
  static async getRecipes(): Promise<Recipe[]> {
    return new Promise(async (resolve) => {
      const data = (await import('@/recipes.json')).default as Recipe[];

      setTimeout(() => resolve(data), 500);
    });
  }

  static async getRecipeById(id: string): Promise<Recipe> {
    return new Promise(async (resolve) => {
      const data = await this.getRecipes();

      return resolve(data.filter((recipe) => recipe.id === id)[0]);
    });
  }
}
