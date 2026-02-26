import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { teamData } from '../../data';

@Component({
  selector: 'about-team',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './team.html',
  styles: ``,
})
  
export class Team {
  teamData = teamData;
}
