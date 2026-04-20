import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { Stories } from "./components/stories/stories";
import { Stories2 } from "./components/stories2/stories2";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-customer-stories',
  imports: [Banner, Stories, Stories2, Cta],
  templateUrl: './customer-stories.html',
  styles: ``,
})
export class CustomerStories {

}
