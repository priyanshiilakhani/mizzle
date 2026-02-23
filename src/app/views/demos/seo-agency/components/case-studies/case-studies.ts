import { Component } from '@angular/core';
import { caseStudies } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'seo-case-studies',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './case-studies.html',
  styles: ``,
})
export class CaseStudies {
caseStudiesData = caseStudies
}
