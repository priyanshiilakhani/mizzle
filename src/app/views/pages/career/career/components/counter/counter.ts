import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { counterData } from '../../data';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'career-counter',
  imports: [LucideAngularModule, CountUpDirective],
  templateUrl: './counter.html',
  styles: ``,
})
export class Counter {
  counterData = counterData;
}
