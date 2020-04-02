import { Ingredient } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
      ];

    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredientAdded(newIngredient : Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}