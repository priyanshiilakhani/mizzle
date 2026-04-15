import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { List } from "./components/list/list";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-grid',
  imports: [Hero, List, Footer],
  templateUrl: './grid.html',
  styles: ``,
})
export class Grid {

}
