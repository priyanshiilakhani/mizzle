import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@core/directive/glightbox.directive";
import { Works } from "../components/works/works";

@Component({
  selector: 'app-case-study-v2',
  imports: [RouterLink, LucideAngularModule, GlightboxDirective, Works],
  templateUrl: './case-study-v2.html',
  styles: ``,
})
  
export class CaseStudyV2 {

}
