import { Component, OnInit } from '@angular/core';
import { SaveformService } from '../saveform.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  constructor(private sf: SaveformService, private router:Router) { }

  ngOnInit() {
    if(this.sf.name == ""){
      this.router.navigateByUrl('/get-started')
  
      }
  }

  setHowSoon(time){
    this.sf.howSoon = time;
    console.log(this.sf.howSoon);

    this.router.navigateByUrl('/step-four');
  }
}
