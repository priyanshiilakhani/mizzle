import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Details } from './components/details/details';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-single-v2',
  imports: [LucideAngularModule, Details, Sidebar],
  templateUrl: './single-v2.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class SingleV2 {}
