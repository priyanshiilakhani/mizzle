import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Grid } from "./components/grid/grid";
import { Achivements } from "./components/achivements/achivements";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-team',
  imports: [Hero, Grid, Achivements, Footer],
  templateUrl: './team.html',
  styles: ``,
})
  
export class Team {

}
