
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { categoryData } from '../../data';

@Component({
  selector: 'product-filter-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './filter-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FilterSidebar {
  categoryData = categoryData;
}
