import { Ingredient } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
      ];

    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredientAdded(newIngredient : Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}