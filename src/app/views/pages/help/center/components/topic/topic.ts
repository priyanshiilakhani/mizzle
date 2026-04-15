import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { featureData } from '../../data';

@Component({
  selector: 'help-topic',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './topic.html',
  styles: ``,
})
  
export class Topic {
  featureData = featureData;
}
