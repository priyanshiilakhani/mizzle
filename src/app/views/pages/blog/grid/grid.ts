import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { List } from "./components/list/list";

@Component({
  selector: 'app-grid',
  imports: [Hero, List],
  templateUrl: './grid.html',
  styles: ``,
})
export class Grid {

}
