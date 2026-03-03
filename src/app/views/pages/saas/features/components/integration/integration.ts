import { Component } from '@angular/core';
import { impactFeatureData, ImpactFeatureType } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'features-integration',
  imports: [],
  templateUrl: './integration.html',
  styles: ``,
})
export class Integration {
  impactFeatureData: (ImpactFeatureType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.impactFeatureData = impactFeatureData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}
