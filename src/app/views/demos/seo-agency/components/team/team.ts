import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { teamMemberData } from '../../data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'seo-team',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './team.html',
  styles: ``,
})
export class Team {
  teamMemberData = teamMemberData;
}
