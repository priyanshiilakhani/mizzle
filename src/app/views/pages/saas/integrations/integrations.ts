import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Grid } from "./components/grid/grid";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-integrations',
  imports: [Hero, Grid, Cta],
  templateUrl: './integrations.html',
  styles: ``,
})
export class Integrations {

}
