import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { workData } from '../../data';

@Component({
  selector: 'career-work',
  imports: [LucideAngularModule],
  templateUrl: './work.html',
  styles: ``,
})
  
export class Work {
  workData = workData;
}
