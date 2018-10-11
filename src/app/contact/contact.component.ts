import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, EmailValidator } from '@angular/forms';
import { SaveformService } from '../saveform.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  angForm: FormGroup;

  formError: Boolean = false;

  constructor( private fb: FormBuilder , private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
        name: ['',[Validators.required,Validators.minLength(3)] ],
      email: ['',[ Validators.required , Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ]],
      subject: ['',[Validators.required,Validators.minLength(3)]],
      comment: ['',[Validators.required,Validators.minLength(3)]  ]

   });
  }

  checkAllFields(){

    if(this.angForm.value.name == '' || this.angForm.value.email == '' || this.angForm.value.subject == '' || this.angForm.value.comment == ''){
      this.formError = true;

      setTimeout(()=>{
        this.formError = false;
      },3000)


    }
    else{
      this.getContactDetails();
    }
  }

  getContactDetails(){
    console.log(this.angForm.value);
  



    if(this.angForm.valid){

      console.log(this.angForm.value);
  
     
  
      
  
    this.router.navigateByUrl('/thank-you')
      }
      
      else{
        this.formError = true;
  
        setTimeout(()=>{
          this.formError = false;
        },3000)
  
      }
      
    }

  
}
