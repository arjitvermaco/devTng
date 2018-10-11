import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http , Headers} from '../../node_modules/@angular/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { SaveformService } from './saveform.service';
// import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AddLeadService {

  contact;

  firebase;

  constructor(private http:Http , private angularFire: AngularFireDatabase, private sf: SaveformService){

    this.contact = {name:this.sf.name,company:this.sf.company,email:this.sf.email,leadSource:this.sf.source,developerNeeded:this.sf.noOfDevs,time:this.sf.time,whenNeeded:this.sf.howSoon, skills:this.sf.skills};
    this.firebase = this.angularFire.list('/signups');



  }

  addContact(contact){
    if(contact){
        this.firebase.push({
            contact: contact,
            createdDate: (new Date()).getTime()
        });
    } else {
        console.log('Enter task');
    }
}


  
  
 
  
}
