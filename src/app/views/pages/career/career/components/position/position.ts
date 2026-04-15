import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { positionData } from '../../data';

@Component({
  selector: 'career-position',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './position.html',
  styles: ``,
})
export class Position {
  positionData = positionData;
  activeTab = 'pills-all';
}
