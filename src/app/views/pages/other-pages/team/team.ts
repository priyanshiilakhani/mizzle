import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Grid } from "./components/grid/grid";
import { Achivements } from "./components/achivements/achivements";

@Component({
  selector: 'app-team',
  imports: [Hero, Grid, Achivements],
  templateUrl: './team.html',
  styles: ``,
})
  
export class Team {

}
