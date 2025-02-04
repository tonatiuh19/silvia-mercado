import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BookPurchaseDialogComponent } from './book-purchase-dialog/book-purchase-dialog.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'finanzasfelices', component: BookPurchaseDialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
