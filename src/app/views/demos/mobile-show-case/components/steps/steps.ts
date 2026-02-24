import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterLink } from "@angular/router";
register()

@Component({
  selector: 'mobile-show-case-steps',
  imports: [RouterLink],
  templateUrl: './steps.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Steps {

}
