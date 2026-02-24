import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'saas-v1-blog',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blog.html',
  styles: ``,
})
  
export class Blog {}
