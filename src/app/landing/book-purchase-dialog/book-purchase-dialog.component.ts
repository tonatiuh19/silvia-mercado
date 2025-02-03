import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-purchase-dialog',
  templateUrl: './book-purchase-dialog.component.html',
  standalone: false,
  styleUrls: ['./book-purchase-dialog.component.css'],
})
export class BookPurchaseDialogComponent {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  closeDialog() {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
