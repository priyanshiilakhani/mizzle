import { Component } from '@angular/core';
import { Details } from "./components/details/details";
import { Cta } from "./components/cta/cta";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-terms-and-condition',
  imports: [Details, Cta, Footer],
  templateUrl: './terms-and-condition.html',
  styles: ``,
})
export class TermsAndCondition {

}
