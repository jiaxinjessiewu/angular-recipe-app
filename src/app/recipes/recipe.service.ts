import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'For testing 1', 'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
        new Recipe('Test Recipe 2', 'For testing 2', 'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
        new Recipe('Test Recipe 3', 'For testing 3', 'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg')
      ];

    getRecipe() {
        return this.recipes.slice(); // doesnt change the recipes, only get the copy
    }
}