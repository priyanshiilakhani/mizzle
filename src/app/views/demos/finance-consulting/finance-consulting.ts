import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Rating } from "./components/rating/rating";
import { Service } from "./components/service/service";
import { About } from "./components/about/about";
import { Work } from "./components/work/work";
import { Clients } from "./components/clients/clients";
import { Cta } from "./components/cta/cta";
import { Contact } from "./components/contact/contact";
import { Footer } from "@app/components/footer/footer";


@Component({
  selector: 'app-finance-consulting',
  imports: [Hero, Rating, Service, About, Work, Clients, Cta, Contact, Footer],
  templateUrl: './finance-consulting.html',
  styles: ``,
})
  
export class FinanceConsulting {}
