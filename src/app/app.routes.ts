import { Routes } from '@angular/router';
import { CategoriesTableComponent } from './categories-table/categories-table.component';
import { FormsComponent } from './forms/forms.component';
import { GameComponent } from './game/game.component';
import { TranslateComponent } from './translate/translate.component';

export const routes: Routes = [
    {path:"",
    component:CategoriesTableComponent

    },
    {
        path:"game",
        component:GameComponent
    },
    {
        path:"translate/:categoryId",
        component:TranslateComponent
    },
{
    path:"edit/:id",
    component:FormsComponent
},
{
    path:"edit",
    component:FormsComponent
}
];


