import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { features } from '../../data';

@Component({
  selector: 'landing-product-feature',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './feature.html',
  styles: ``,
})
export class Feature {
features = features
}
