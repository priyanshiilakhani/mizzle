import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { RouterLink } from '@angular/router';
import { Works } from "../components/works/works";


@Component({
  selector: 'app-case-study-v1',
  imports: [LucideAngularModule, RouterLink, GlightboxDirective, Works],
  templateUrl: './case-study-v1.html',
  styles: ``,
})
  
export class CaseStudyV1 {}
