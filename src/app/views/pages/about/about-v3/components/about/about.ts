import { Component } from '@angular/core';
import { CountUpDirective } from 'ngx-countup';
import { aboutData, AboutType } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'aboutV3-about',
  imports: [CountUpDirective],
  templateUrl: './about.html',
  styles: ``,
})
  
export class About {
  aboutData: (AboutType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.aboutData = aboutData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}
