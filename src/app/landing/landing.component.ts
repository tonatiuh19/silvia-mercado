import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  standalone: false,
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    console.log('Landing component initialized');
  }

  showDialog() {
    this.router.navigate(['finanzasfelices']);
  }
}
