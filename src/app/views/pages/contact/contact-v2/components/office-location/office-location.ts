import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { locations } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'contact-v2-office-location',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './office-location.html',
  styles: ``,
})
export class OfficeLocation {
  locations = locations;
}
