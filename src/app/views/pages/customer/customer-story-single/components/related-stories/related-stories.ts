import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { storiesData } from '../../data';

@Component({
  selector: 'customer-story-single-related-stories',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './related-stories.html',
  styles: ``,
})
  
export class RelatedStories {
  storiesData = storiesData;
}
