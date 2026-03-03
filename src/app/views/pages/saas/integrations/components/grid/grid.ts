import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { integrationsData } from '../../data';

@Component({
  selector: 'integrations-grid',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './grid.html',
  styles: ``,
})
export class Grid {
  integrationsData = integrationsData;
}
