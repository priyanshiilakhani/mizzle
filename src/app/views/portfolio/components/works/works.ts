import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { workData } from './data';

register();

@Component({
  selector: 'case-study-works',
  imports: [RouterLink],
  templateUrl: './works.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Works {
  workData = workData;
}
