import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { workData, WorkType } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'about-work',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './work.html',
  styles: ``,
})
  
export class Work {
  workData: (WorkType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.workData = workData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}