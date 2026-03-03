import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { featureData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'features-work',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './work.html',
  styles: ``,
})
export class Work {
  featureData = featureData;
}
