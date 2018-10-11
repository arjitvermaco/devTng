import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SaveformService } from '../saveform.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {

  skillsNeeded = "";

  show: boolean = false;
  constructor(private router: Router, private sf: SaveformService) { }

  ngOnInit() {
    if(this.sf.name == ""){
      this.router.navigateByUrl('/get-started')
  
      }
  }

  goToSummary(){
    
    if(this.skillsNeeded == ''){
      console.log('Error');
      this.show = true;
    }
    
    else{
      this.sf.skills = this.skillsNeeded;

      console.log(this.skillsNeeded);
      console.log(this.sf.skills);

      this.router.navigateByUrl('/summary')
    }
   
  }

}
