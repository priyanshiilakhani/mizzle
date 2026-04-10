import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { gridData } from '../../data';

@Component({
  selector: 'team-grid',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './grid.html',
  styles: ``,
})
  
export class Grid {
  gridData = gridData;
}
