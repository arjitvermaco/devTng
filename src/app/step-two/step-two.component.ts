import { Component, OnInit } from '@angular/core';
import { SaveformService } from '../saveform.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  constructor( private sf: SaveformService, private router:Router) { }

  ngOnInit() {
    if(this.sf.name == ""){
      this.router.navigateByUrl('/get-started')
  
      }
  }

  getTime(time){
    this.sf.time = time;
    console.log(this.sf.time)
    this.router.navigateByUrl('/step-three');

  }

}
