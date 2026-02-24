import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { projectData } from '../../data';

@Component({
  selector: 'design-agency-work',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './work.html',
  styles: ``,
})
  
export class Work {
  projectData = projectData;
}
