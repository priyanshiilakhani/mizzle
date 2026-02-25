import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'saas-v3-pricing',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
})
export class Pricing {}
