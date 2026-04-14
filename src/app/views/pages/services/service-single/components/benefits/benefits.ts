import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { benefitsData } from '../../data';

@Component({
  selector: 'service-single-benefits',
  imports: [LucideAngularModule],
  templateUrl: './benefits.html',
  styles: ``,
})
  
export class Benefits {
  benefitsData = benefitsData;
}
