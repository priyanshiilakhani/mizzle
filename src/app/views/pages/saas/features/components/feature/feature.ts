import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'feature',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './feature.html',
  styles: ``,
})
export class Feature {

}
