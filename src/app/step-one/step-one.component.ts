import { Component, OnInit } from '@angular/core';
import { SaveformService } from '../saveform.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  constructor(private sf: SaveformService, private router: Router) { }

  ngOnInit() {
    if(this.sf.name == ""){
    this.router.navigateByUrl('/get-started')

    }
  }


  setNoOfDevs(no){
    this.sf.saveStepOne(no);

    this.router.navigateByUrl('/step-two')
  }
}
