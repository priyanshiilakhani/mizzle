import { Component } from '@angular/core';
import { Details } from "./components/details/details";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-terms-and-condition',
  imports: [Details, Cta],
  templateUrl: './terms-and-condition.html',
  styles: ``,
})
  
export class TermsAndCondition {

}
