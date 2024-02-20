import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategoriesTableComponent } from './categories-table/categories-table.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from "./forms/forms.component";
import { DeleteCategoryDailogComponent } from "./delete-category-dailog/delete-category-dailog.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, CategoriesTableComponent, FooterComponent, FormsComponent, DeleteCategoryDailogComponent]
})
export class AppComponent {
  title = 'angular-words';
}
