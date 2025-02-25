import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faContactCard, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  standalone: false,
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, OnDestroy {
  showFinanceButton: boolean = false;
  isMobile: boolean = window.innerWidth <= 768;

  faContactCard = faContactCard;
  faDollarSign = faDollarSign;

  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private titleService: Title,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.isMobileView();
    this.titleService.setTitle('Silvia Mercado');
    this.updateButtonText();
    window.addEventListener('resize', this.updateButtonText.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateButtonText.bind(this));
  }

  showDialog() {
    this.router.navigate(['finanzasfelices']);
  }

  updateButtonText() {
    this.isMobile = window.innerWidth <= 768;
  }

  openWhatsAppChat() {
    const whatsappNumber = '+525513806192'; // Replace with your WhatsApp Business number
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank');
  }

  isMobileView() {
    this.isMobile = window.innerWidth <= 950;
    if (this.isMobile) {
      this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const targetElement = document.getElementById('button-enter');
    if (targetElement) {
      this.updateButtonText();
      const rect = targetElement.getBoundingClientRect();
      this.showFinanceButton = rect.top <= 0;
    }
  }
}
