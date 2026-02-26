import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { clientData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'finance-consulting-clients',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './clients.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Clients {
  clientData = clientData;
}
