import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { integrationData, IntegrationType } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'saas-v3-integration',
  imports: [RouterLink],
  templateUrl: './integration.html',
  styles: ``,
})
  
export class Integration {

  integrationData: (IntegrationType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.integrationData = integrationData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}
