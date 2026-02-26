import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@core/directive/glightbox.directive";

@Component({
  selector: 'about-video',
  imports: [LucideAngularModule, GlightboxDirective],
  templateUrl: './video.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Video {}
