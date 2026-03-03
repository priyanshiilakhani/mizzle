import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { integrationData } from '../../data';

@Component({
  selector: 'integration-single-relatetd',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './relatetd.html',
  styles: ``,
})
export class Relatetd {
  integrationData = integrationData;
}
