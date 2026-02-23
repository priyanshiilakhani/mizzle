import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { teamMembers } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'seo-team',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './team.html',
  styles: ``,
})
export class Team {
 teamMembersData = teamMembers
}
