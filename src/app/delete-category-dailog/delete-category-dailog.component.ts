import {Component, Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogModule,} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-delete-category-dailog',
  standalone: true,
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './delete-category-dailog.component.html',
  styleUrl: './delete-category-dailog.component.css'
})
export class DeleteCategoryDailogComponent {

constructor(
  public dialogRef: MatDialogRef<DeleteCategoryDailogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:{name:string},) {}

}
