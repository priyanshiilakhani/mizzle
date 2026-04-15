import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { featureData } from '../../data';

@Component({
  selector: 'center-help-detail',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './help-detail.html',
  styles: ``,
})
  
export class HelpDetail {
  featureData = featureData;
}
