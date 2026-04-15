import { Component } from '@angular/core';
import { CareerDetail } from "./components/career-detail/career-detail";
import { Cta } from "./components/cta/cta";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-career-single',
  imports: [CareerDetail, Cta, Footer],
  templateUrl: './career-single.html',
  styles: ``,
})
export class CareerSingle {

}
