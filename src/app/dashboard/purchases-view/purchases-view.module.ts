import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesViewComponent } from './purchases-view.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PurchasesViewComponent],
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PurchasesViewComponent],
})
export class PurchasesViewModule {}
