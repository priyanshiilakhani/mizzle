import { Component } from '@angular/core';
import { integrations } from '../../data';

@Component({
  selector: 'saas-v2-integration',
  imports: [],
  templateUrl: './integration.html',
  styles: ``,
})
export class Integration {
  integrations = integrations;
}
