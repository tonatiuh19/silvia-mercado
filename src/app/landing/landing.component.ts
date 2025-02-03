import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  standalone: false,
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  displayDialog: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Landing component initialized');
  }

  showDialog() {
    this.displayDialog = true;
    console.log('Dialog opened');
  }

  hideDialog() {
    this.displayDialog = false;
    this.cdr.detectChanges(); // Detect changes when the dialog is closed
  }
}
