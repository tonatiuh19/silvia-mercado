import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyTermsComponent } from './privacy-terms.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [PrivacyTermsComponent],
  imports: [CommonModule, FontAwesomeModule, FooterModule],
  exports: [PrivacyTermsComponent],
})
export class PrivacyTermsModule {}
