import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { storyData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'customer-stories2',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './stories2.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Stories2 {
  storyData = storyData;
}
