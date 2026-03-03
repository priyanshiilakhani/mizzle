import { Component } from '@angular/core';
import { Footer } from "@app/components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Grid } from "./components/grid/grid";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-integrations',
  imports: [Footer, Hero, Grid, Cta],
  templateUrl: './integrations.html',
  styles: ``,
})
export class Integrations {

}
