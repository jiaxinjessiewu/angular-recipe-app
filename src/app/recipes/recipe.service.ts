import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
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
        return this.recipes.slice()[id];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}