import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { servicesData, ServiceType } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

register();

@Component({
  selector: 'finance-consulting-service',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './service.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Service {
  servicesData: (ServiceType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.servicesData = servicesData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}
