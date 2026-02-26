import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { bannerData } from '../../data';

@Component({
  selector: 'about-banner',
  imports: [LucideAngularModule],
  templateUrl: './banner.html',
  styles: ``,
})
  
export class Banner {
  bannerData = bannerData;
}
