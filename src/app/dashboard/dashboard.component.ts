import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { LandingActions } from '../shared/store/actions';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  faUser = faUser;

  constructor(private store: Store, private router: Router) {}

  logOut() {
    this.store.dispatch(LandingActions.resetAdmin());
    this.router.navigate(['']);
  }
}
