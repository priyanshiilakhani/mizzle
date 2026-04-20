import { Component } from '@angular/core';
import { Detail } from "./components/detail/detail";
import { Relatetd } from "./components/relatetd/relatetd";

@Component({
  selector: 'app-integrations-single',
  imports: [Detail, Relatetd],
  templateUrl: './integrations-single.html',
  styles: ``,
})
export class IntegrationsSingle {

}
