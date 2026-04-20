import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Feature } from "./components/feature/feature";
import { Client } from "./components/client/client";

@Component({
  selector: 'app-servicev1',
  imports: [Hero, Services, Feature, Client],
  templateUrl: './servicev1.html',
  styles: ``,
})
  
export class Servicev1 {

}
