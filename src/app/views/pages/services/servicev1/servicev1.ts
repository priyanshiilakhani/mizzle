import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Feature } from "./components/feature/feature";
import { Client } from "./components/client/client";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-servicev1',
  imports: [Hero, Services, Feature, Client, Footer],
  templateUrl: './servicev1.html',
  styles: ``,
})
  
export class Servicev1 {

}
