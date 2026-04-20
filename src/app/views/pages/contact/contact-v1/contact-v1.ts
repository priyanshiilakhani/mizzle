import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { ContactInfo } from "./components/contact-info/contact-info";

@Component({
  selector: 'app-contact-v1',
  imports: [Hero, ContactInfo],
  templateUrl: './contact-v1.html',
  styles: ``,
})
export class ContactV1 {

}
