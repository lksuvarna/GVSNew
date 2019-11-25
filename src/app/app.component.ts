import { Component } from '@angular/core';
import {Country_Details} from './setupfile';
import { setupMaster } from 'cluster';
const rt =Country_Details;

@Component({
  selector: 'my-app',
  template: `<div class="custom-select" style="width:215px;" >
  <select  id="siteDrp" class="countrypage" >
  <option value="Change Country" selected>Change Country</option>        
  <option *ngFor="let r of rt" [value]="r.value+'#'+r.name" ><a style="font-weight:normal;color: black;text-decoration: none;" href={{r.url}}>{{ r.name }}</a></option>
    </select></div>`
})
export class AppComponent  { name = 'Angular';
rt=rt }



