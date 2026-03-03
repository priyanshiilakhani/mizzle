import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { serviceData } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'digital-agency-services',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './services.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Services {
  serviceData = serviceData
}
