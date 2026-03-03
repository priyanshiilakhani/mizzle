import { Component } from '@angular/core';
import { Footer } from "@app/components/footer/footer";
import { Detail } from "./components/detail/detail";
import { Relatetd } from "./components/relatetd/relatetd";

@Component({
  selector: 'app-integrations-single',
  imports: [Footer, Detail, Relatetd],
  templateUrl: './integrations-single.html',
  styles: ``,
})
export class IntegrationsSingle {

}
