import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { Video } from "./components/video/video";
import { Counter } from "./components/counter/counter";
import { Work } from "./components/work/work";
import { Cta } from "./components/cta/cta";
import { Team } from "./components/team/team";

@Component({
  selector: 'app-about-v1',
  imports: [Banner, Video, Counter, Work, Cta, Team],
  templateUrl: './about-v1.html',
  styles: ``,
})
export class AboutV1 {

}
