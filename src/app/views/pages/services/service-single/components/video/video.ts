import { Component } from '@angular/core';
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'service-single-video',
  imports: [LucideAngularModule, GlightboxDirective],
  templateUrl: './video.html',
  styles: ``,
})
  
export class Video {}
