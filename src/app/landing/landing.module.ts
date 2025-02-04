import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, FooterModule],
  exports: [LandingComponent],
})
export class LandingModule {}
