import { Component } from '@angular/core';
import { CareerDetail } from "./components/career-detail/career-detail";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-career-single',
  imports: [CareerDetail, Cta],
  templateUrl: './career-single.html',
  styles: ``,
})
export class CareerSingle {

}
