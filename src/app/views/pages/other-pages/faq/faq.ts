import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { List } from "./components/list/list";
import { Actionbox } from "./components/actionbox/actionbox";

@Component({
  selector: 'app-faq',
  imports: [Hero, List, Actionbox],
  templateUrl: './faq.html',
  styles: ``,
})
  
export class Faq {

}
