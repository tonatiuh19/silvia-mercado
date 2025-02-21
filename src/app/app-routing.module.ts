import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BookPurchaseDialogComponent } from './book-purchase-dialog/book-purchase-dialog.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PrivacyTermsComponent } from './shared/privacy-terms/privacy-terms.component';

const routes: Routes = [
  //{ path: '', component: ComingSoonComponent },
  { path: '', component: LandingComponent },
  { path: 'finanzasfelices', component: BookPurchaseDialogComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'avisodeprivacidad', component: PrivacyTermsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
