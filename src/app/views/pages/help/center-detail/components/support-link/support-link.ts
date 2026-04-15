import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { supportLinkData } from '../../data';

@Component({
  selector: 'center-detail-support-link',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './support-link.html',
  styles: ``,
})
export class SupportLink {
  supportLinkData = supportLinkData;
}
