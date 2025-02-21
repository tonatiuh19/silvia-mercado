import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: false,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  faHeart = faHeart;
  constructor(private router: Router) {}

  goToFacebook() {
    window.open('https://www.facebook.com/silviamercadofinanzas', '_blank');
  }

  goToInstagram() {
    window.open('https://www.instagram.com/silviamercadofinanzas', '_blank');
  }

  goToTikTok() {
    window.open('https://www.tiktok.com/@silviamercadofinanzas', '_blank');
  }

  goToPrivacyTerms() {
    window.open(
      this.router.serializeUrl(
        this.router.createUrlTree(['avisodeprivacidad'])
      ),
      '_blank'
    );
  }

  goToGarbrix() {
    window.open('https://garbrix.com', '_blank');
  }
}
