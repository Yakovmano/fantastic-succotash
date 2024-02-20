import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MatIconModule,RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  selectedCategoryId: number | undefined
  constructor(
    private router: Router,
    public categoryService:  CategoryService) {
      // set the selected category to the first category
      const keys = Array.from(this.categoryService.categories.keys())
      this.selectedCategoryId = keys[0]
  }

  onSelectCategory(e:Event) {
    this.selectedCategoryId = +(e.target as HTMLInputElement).value
  }

  moveToTranslateGame() {
    this.router.navigate([`/translate/${this.selectedCategoryId}`])
  }
}
