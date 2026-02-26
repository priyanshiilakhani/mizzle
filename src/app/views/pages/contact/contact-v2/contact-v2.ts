import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { OurWork } from "./components/our-work/our-work";
import { OfficeLocation } from "./components/office-location/office-location";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-contact-v2',
  imports: [Hero, OurWork, OfficeLocation, Footer],
  templateUrl: './contact-v2.html',
  styles: ``,
})
export class ContactV2 {

}
