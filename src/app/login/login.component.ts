import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromLanding } from '../shared/store/selectors';
import { Subject, takeUntil } from 'rxjs';
import { LandingActions } from '../shared/store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent implements OnInit {
  public selectAdmin$ = this.store.select(fromLanding.selectAdmin);

  loginForm!: FormGroup;
  codeForm!: FormGroup;

  isUserValid = false;
  isTheCodeValid = false;
  isCodeSent = false;
  isCodeValid = false;

  email = '';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.codeForm = this.fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{6}$/), // Custom validator for six digits
        ],
      ],
    });

    this.selectAdmin$.pipe(takeUntil(this.unsubscribe$)).subscribe((user) => {
      console.log(user);
      if (user.isUserValid) {
        this.isUserValid = true;
      } else {
        this.isUserValid = false;
      }

      if (user.isCodeValid) {
        this.isCodeValid = true;
        this.router.navigate(['dashboard']);
      } else {
        this.codeForm.reset();
        this.isCodeValid = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.loginForm.reset();
    this.codeForm.reset();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle the form submission
      this.isCodeSent = true;
      this.email = this.loginForm.value.email;
      console.log(this.email);
      this.store.dispatch(
        LandingActions.sendCodeEmail({
          email: this.loginForm.value.email,
        })
      );
    }
  }

  onSubmitCode(): void {
    if (this.codeForm.valid) {
      // Handle the form submission
      this.isTheCodeValid = true;
      this.store.dispatch(
        LandingActions.validateSessionCode({
          code: this.codeForm.value.code,
          email: this.loginForm.value.email,
        })
      );
    }
  }

  resendCode(): void {
    this.loginForm.reset();
    this.codeForm.reset();
    this.store.dispatch(LandingActions.resetAdmin());
    this.router.navigate(['iniciarsesion']);
  }

  goToHome(): void {
    this.router.navigate(['']);
  }
}
