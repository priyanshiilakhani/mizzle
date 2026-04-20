import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Content } from "./components/content/content";
import { RelatedStories } from "./components/related-stories/related-stories";

@Component({
  selector: 'app-customer-story-single',
  imports: [Hero, Content, RelatedStories],
  templateUrl: './customer-story-single.html',
  styles: ``,
})
  
export class CustomerStorySingle {

}
