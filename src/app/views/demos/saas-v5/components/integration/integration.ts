import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'saas-v5-integration',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './integration.html',
  styles: ``,
})
export class Integration {}
