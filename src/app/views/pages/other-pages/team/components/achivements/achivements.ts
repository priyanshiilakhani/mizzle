import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { awardData, designAwardData } from '../../data';

@Component({
  selector: 'team-achivements',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './achivements.html',
  styles: ``,
})
export class Achivements {
  awardData = awardData;
  designAwardData = designAwardData;
}
