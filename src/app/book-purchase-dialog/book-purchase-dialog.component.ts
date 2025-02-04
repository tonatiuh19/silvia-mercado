import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-purchase-dialog',
  templateUrl: './book-purchase-dialog.component.html',
  standalone: false,
  styleUrls: ['./book-purchase-dialog.component.css'],
})
export class BookPurchaseDialogComponent {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  faLock = faLock;

  constructor(private router: Router) {}

  closeDialog() {
    this.router.navigate(['']);
  }
}
