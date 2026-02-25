import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { integrations } from '../../data';

@Component({
  selector: 'saas-v4-integrations',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './integrations.html',
  styles: ``,
})
export class Integrations {
  integrations = integrations;
}
