import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { reviewData } from '../../data';

@Component({
  selector: 'customer-stories',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './stories.html',
  styles: ``,
})
  
export class Stories {
  reviewData = reviewData;
}
