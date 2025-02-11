import { Component } from '@angular/core';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading-mask',
  templateUrl: './loading-mask.component.html',
  styleUrl: './loading-mask.component.css',
  standalone: false,
})
export class LoadingMaskComponent {
  faHandHoldingDollar = faHandHoldingDollar;
}
