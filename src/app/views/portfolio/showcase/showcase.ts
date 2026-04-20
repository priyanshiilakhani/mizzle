import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-showcase',
  imports: [RouterLink, LucideAngularModule, Footer],
  templateUrl: './showcase.html',
  styles: ``,
})
  
export class Showcase {

}
