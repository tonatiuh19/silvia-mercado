import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPurchaseDialogComponent } from './book-purchase-dialog.component';

describe('BookPurchaseDialogComponent', () => {
  let component: BookPurchaseDialogComponent;
  let fixture: ComponentFixture<BookPurchaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPurchaseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPurchaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
