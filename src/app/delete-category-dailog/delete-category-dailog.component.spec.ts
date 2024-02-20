import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoryDailogComponent } from './delete-category-dailog.component';

describe('DeleteCategoryDailogComponent', () => {
  let component: DeleteCategoryDailogComponent;
  let fixture: ComponentFixture<DeleteCategoryDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCategoryDailogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCategoryDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
