import { Component, OnInit } from '@angular/core';
import { SaveformService } from '../saveform.service';
import { Router } from '../../../node_modules/@angular/router';


let _agile :any;

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  
  

  constructor(private sf : SaveformService, private router: Router) {

   }

  ngOnInit() {
    // if(this.sf.name == ""){
    //   this.router.navigateByUrl('/get-started')
  
    //   }
  }

  

}
