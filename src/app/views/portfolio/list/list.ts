import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { portfolioListData } from './data';

@Component({
  selector: 'app-list',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './list.html',
  styles: ``,
})
  
export class List {
  portfolioListData = portfolioListData;
}
