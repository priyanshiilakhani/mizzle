import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { featuresData } from '../../data';

@Component({
  selector: 'landing-product-testimonial-card',
  imports: [LucideAngularModule],
  templateUrl: './testimonial-card.html',
  styles: ``,
})
export class TestimonialCard {
featuresData=featuresData
}
