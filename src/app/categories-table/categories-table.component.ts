import { Component } from '@angular/core';
import{ Category} from '../models/Category';
import Language from '../models/Language';
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslatedWord } from '../models/translatedword';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDailogComponent } from '../delete-category-dailog/delete-category-dailog.component';

@Component({
  selector: 'app-categories-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.css'
})
export class CategoriesTableComponent {
[x: string]: any;

  displayedColumns : string[]= ["name", "words", "lastUpdateDate", "actions"]

  categories:Category[] = []
  CategoryService: any;
Category: any;
Cat: any;
   
  constructor(private service:CategoryService,private dialog: MatDialog){
     for(const cat of this.service.List().values()){
      this.categories.push(cat);
     }
  }

  onUpdate(){
    console.log('update');

  }
  onDelete(id:number,name:string){
    const dialogRef = this.dialog.open(DeleteCategoryDailogComponent,{data:{name}});
    
    dialogRef.afterClosed().subscribe(deletionConfirm => {
      if(deletionConfirm){
  this.service.delete(id)
  this.categories=this.service.List()
  }
});
  }
}
