import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { teamData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'aboutV3-team',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './team.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Team {
  teamData = teamData;
}
