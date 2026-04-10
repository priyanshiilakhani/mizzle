import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.html',
  styles: ``,
})
export class Breadcrumb {
  @Input() title: string[] = []
  @Input() pageTitle: string = ''
  @Input() breadcrumbClass: string = ''
}
