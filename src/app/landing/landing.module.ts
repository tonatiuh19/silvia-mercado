import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterModule } from '../shared/footer/footer.module';
import { InfiniteSvgCarouselModule } from './infinite-svg-carousel/infinite-svg-carousel.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    FooterModule,
    InfiniteSvgCarouselModule,
    FontAwesomeModule,
  ],
  exports: [LandingComponent],
})
export class LandingModule {}
