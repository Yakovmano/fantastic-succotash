import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { _isNumberValue } from '@angular/cdk/coercion';
import { CategoryNotFoundError, InvalidCategoryId } from '../errors';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule, RouterModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {

  correctAnswers: boolean[] | undefined
  category: Category | undefined
  targetControls: FormControl[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService)  {
  
    }

  hebrewValidator(control: any) {
    const hebrewRegex = /^[\u0590-\u05FF]+$/;
    return hebrewRegex.test(control.value) ? null : { invalidHebrew: true };
  }


  check()  {
    let correctAnswers = []
    for(let i = 0; i < this.targetControls.length; i++) {
      const user_target = this.targetControls[i].value
      const actual_target = this.category!.words[i].target
      correctAnswers.push(user_target === actual_target)
    }
    this.correctAnswers = correctAnswers
  }

  correct() {
    if(!this.correctAnswers) return 0
    return this.correctAnswers.filter(answer => answer).length
  }

  isAllCorrect() {
   if(this.correctAnswers) {
      return this.correctAnswers.filter(answer => !answer).length === 0
   }
   return false
  } 


  showTranslation(index: number) {
    if(this.category) {
      const control = this.targetControls[index]
      const target = this.category.words[index].target
      control.setValue(target)
    }
  }


  
  ngOnInit() :void {
    try {
      const categoryId = this.route.snapshot.paramMap.get('categoryId');
      if(_isNumberValue(categoryId)) {
        this.category = this.categoryService.get(parseInt(categoryId!))
        for(var _ of this.category.words) {
          this.targetControls.push(new FormControl('', [Validators.required, this.hebrewValidator]))
        }
      }
      else {
        throw new InvalidCategoryId(categoryId)
      }
    } catch(e: any) {
      alert(e.message)
      this.router.navigate(["/game"])
    }
  }

}
