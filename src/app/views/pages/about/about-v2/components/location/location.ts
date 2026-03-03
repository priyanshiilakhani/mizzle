import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { locationData } from '../../data';

@Component({
  selector: 'aboutV2-location',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './location.html',
  styles: ``,
})
  
export class Location {
  locationData = locationData;
}
