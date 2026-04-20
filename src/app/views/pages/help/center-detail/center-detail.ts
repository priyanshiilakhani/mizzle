import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { HelpDetail } from "./components/help-detail/help-detail";
import { SupportLink } from "./components/support-link/support-link";

@Component({
  selector: 'app-center-detail',
  imports: [Hero, HelpDetail, SupportLink],
  templateUrl: './center-detail.html',
  styles: ``,
})
  
export class CenterDetail {

}
