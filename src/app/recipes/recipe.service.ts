import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 
        'For testing 1', 
        'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Apple', 2),
        ]),
        new Recipe('Test Recipe 2', 'For testing 2', 
        'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg',
        [
            new Ingredient('Beed', 3),
            new Ingredient('Pear', 5),
        ]),
        new Recipe('Test Recipe 3', 'For testing 3', 
        'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg',
        [
            new Ingredient('Lamb', 2),
            new Ingredient('Watermelon', 5),
        ])
      ];
    constructor(private slService : ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice(); // doesnt change the recipes, only get the copy
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

    getRecipe(id:number) {
        console.log("Serve: ",id)
        return this.recipes.slice()[id];
    }
}