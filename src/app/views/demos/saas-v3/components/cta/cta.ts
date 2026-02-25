import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'saas-v3-cta',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './cta.html',
  styles: ``,
})
  
export class Cta {}
