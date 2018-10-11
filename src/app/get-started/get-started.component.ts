import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AddLeadService } from '../add-lead.service';

import { FormGroup,  FormBuilder,  Validators, EmailValidator } from '@angular/forms';
import { SaveformService } from '../saveform.service';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

    signups;
    angForm: FormGroup;

    showError: boolean = false;
    

  constructor(private router: Router , private leadService : AddLeadService , private fb: FormBuilder , private sf:SaveformService)   { 
    this.createForm();

    // this.leadService.addContact();
  }


  createForm() {
    this.angForm = this.fb.group({
        name: ['',[Validators.required,Validators.minLength(3)] ],
      email: ['',[ Validators.required , Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ]],
      company: ['',[Validators.required,Validators.minLength(3)]],
      source: ['', [Validators.required,Validators.minLength(3)] ]

   });
  }
  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });

     
      
  }

  checkAllFields(){

    if(this.angForm.value.name == '' || this.angForm.value.email == '' || this.angForm.value.company == '' || this.angForm.value.source == ''){
      this.showError = true;

      setTimeout(()=>{
        this.showError = false;
      },3000)


    }
    else{
      this.addGetStarted();
    }
  }



  addGetStarted(){

    if(this.angForm.valid){

    console.log(this.angForm.value);

    this.sf.saveFirstData(this.angForm.value);

    

  this.router.navigateByUrl('/step-one')
    }
    
    else{
      this.showError = true;

      setTimeout(()=>{
        this.showError = false;
      },3000)

    }
    
  }


  
}
