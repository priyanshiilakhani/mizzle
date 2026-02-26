import { Component } from '@angular/core';
import { Footer } from "@app/components/footer/footer";
import { Hero } from "./components/hero/hero";
import { ContactInfo } from "./components/contact-info/contact-info";

@Component({
  selector: 'app-contact-v1',
  imports: [Footer, Hero, ContactInfo],
  templateUrl: './contact-v1.html',
  styles: ``,
})
export class ContactV1 {

}
