export default class RecipeService {
  static async getRecipes() {
    return new Promise(async (resolve) => {
      const data = await import('@/recipes.json');

      setTimeout(() => resolve(data), 2000);
    });
  }

  static async getRecipeById(id) {
    return new Promise(async (resolve) => {
      const data = await import('@/recipes.json');

      setTimeout(() => resolve(data.default.filter((recipe) => recipe.id === id)[0]), 2000);
    });
  }
}