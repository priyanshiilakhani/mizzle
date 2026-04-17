import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { List } from "./components/list/list";
import { Actionbox } from "./components/actionbox/actionbox";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-faq',
  imports: [Hero, List, Actionbox, Footer],
  templateUrl: './faq.html',
  styles: ``,
})
  
export class Faq {

}
