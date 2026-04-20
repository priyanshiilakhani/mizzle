import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Topic } from "./components/topic/topic";
import { Faqs } from "./components/faqs/faqs";
import { SupportLink } from "./components/support-link/support-link";

@Component({
  selector: 'app-center',
  imports: [Hero, Topic, Faqs, SupportLink],
  templateUrl: './center.html',
  styles: ``,
})
  
export class Center {

}
