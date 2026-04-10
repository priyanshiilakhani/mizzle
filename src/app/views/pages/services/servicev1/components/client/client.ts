import { Component } from '@angular/core';
import { clientData } from '../../data';

@Component({
  selector: 'servicev1-client',
  imports: [],
  templateUrl: './client.html',
  styles: ``,
})
  
export class Client {
  clientData = clientData;
}
