import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe_list/recipe_list.component';
import { EditRecipeComponent } from '../recipes/edit_recipe/edit_recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RecipesComponent,
    RecipeListComponent,
    EditRecipeComponent,
    ShoppingListComponent

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
