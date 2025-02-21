import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faContactCard, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-privacy-terms',
  standalone: false,

  templateUrl: './privacy-terms.component.html',
  styleUrl: './privacy-terms.component.css',
})
export class PrivacyTermsComponent implements OnInit {
  isMobile: boolean = window.innerWidth <= 768;

  faContactCard = faContactCard;
  faDollarSign = faDollarSign;

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Silvia Mercado');
    this.isMobileView();
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

  showDialog() {
    this.router.navigate(['finanzasfelices']);
  }
}
