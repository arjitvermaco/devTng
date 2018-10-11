import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-engagement-form',
  templateUrl: './engagement-form.component.html',
  styleUrls: ['./engagement-form.component.css']
})
export class EngagementFormComponent implements OnInit {

  email = '';
  show : boolean = false;
  emailValid = false;
  errorMessage = '';
  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotToGetStarted(){

    this.router.navigateByUrl('/get-started');
  

  }


  // onChange(newValue) {
  //   const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (validEmailRegEx.test(newValue)) {
  //       this.emailValid = true;
  //   }else {
  //     this.emailValid = false;
  //   }

  // }

}
