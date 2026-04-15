import { Component } from '@angular/core';
import { Position } from "./components/position/position";
import { Banner } from "./components/banner/banner";
import { Counter } from "./components/counter/counter";
import { Work } from "./components/work/work";
import { Cta } from "./components/cta/cta";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-career',
  imports: [Position, Banner, Counter, Work, Cta, Footer],
  templateUrl: './career.html',
  styles: ``,
})
  
export class Career {

}
