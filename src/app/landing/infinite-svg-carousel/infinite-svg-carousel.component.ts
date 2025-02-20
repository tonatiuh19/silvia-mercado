import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-svg-carousel',
  templateUrl: './infinite-svg-carousel.component.html',
  styleUrls: ['./infinite-svg-carousel.component.css'],
  standalone: false,
})
export class InfiniteSvgCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [
    'https://garbrix.com/silvia/assets/images/carousel/do_terra.png',
    'https://garbrix.com/silvia/assets/images/carousel/gsi.png',
    'https://garbrix.com/silvia/assets/images/carousel/imef.png',
    'https://garbrix.com/silvia/assets/images/carousel/johnson.png',
    'https://garbrix.com/silvia/assets/images/carousel/mary_kay.png',
    'https://garbrix.com/silvia/assets/images/carousel/shell.png',
    'https://garbrix.com/silvia/assets/images/carousel/sky.png',
    'https://garbrix.com/silvia/assets/images/carousel/walmart.png',
  ];
}
