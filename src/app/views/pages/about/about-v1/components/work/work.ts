import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { workData } from '../../data';

@Component({
  selector: 'about-work',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './work.html',
  styles: ``,
})
  
export class Work {
  workData = workData;
}
