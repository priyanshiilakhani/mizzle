import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Tools } from "./components/tools/tools";
import { Feature } from "./components/feature/feature";
import { Work } from "./components/work/work";
import { Integration } from "./components/integration/integration";

@Component({
  selector: 'app-features',
  imports: [Hero, Tools, Feature, Work, Integration],
  templateUrl: './features.html',
  styles: ``,
})
  
export class Features {

}
