import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SaveformService } from '../saveform.service';
import { AddLeadService } from '../add-lead.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  contact = {
    name:'',
    email:'',
    company:'',
    source:'',
    noOfDevs:'',
    time:'',
    howSoon:'',
    skills:''
  }

  // name: string;
  // email:string;
  // company:string;
  // source:string;

  // noOfDevs;

  // time;

  // howSoon;
  // skills;


  constructor(private router:Router, private sf: SaveformService, private saveLead: AddLeadService) { 
    this.contact.name = this.sf.name;
    this.contact.email = this.sf.email;
    this.contact.company = this.sf.company;
    this.contact.source = this.sf.source;
    this.contact.noOfDevs = this.sf.noOfDevs;
    this.contact.time = this.sf.time;
    this.contact.howSoon = this.sf.howSoon;
    this.contact.skills = this.sf.skills;
  }

  ngOnInit() {
    if(this.sf.name == ""){
      this.router.navigateByUrl('/get-started')
  
      }

  }


  submitForm(){

    this.saveLead.addContact(this.contact);
    this.router.navigateByUrl('/thank-you')
  }
}
