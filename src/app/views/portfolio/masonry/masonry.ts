import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { portfolioData } from './data';
import { IsotopeDirective } from "@core/directive/isotope-directive";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-masonry',
  imports: [LucideAngularModule, RouterLink, IsotopeDirective, CommonModule],
  templateUrl: './masonry.html',
  styles: ``,
})
  
export class Masonry {
  portfolioData = portfolioData;
  activeFilter: string = '*';
  @ViewChild(IsotopeDirective) isotopeDirective!: IsotopeDirective;

  filterItems(filter: string): void {
    if (this.isotopeDirective) {
      this.activeFilter = filter;
      this.isotopeDirective.arrangeIsotope(filter);
    }
  }
}
