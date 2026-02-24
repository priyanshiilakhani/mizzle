import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@core/directive/glightbox.directive";

@Component({
  selector: 'landing-product-video',
  imports: [LucideAngularModule, GlightboxDirective],
  templateUrl: './video.html',
  styles: ``,
})
export class Video {

}
