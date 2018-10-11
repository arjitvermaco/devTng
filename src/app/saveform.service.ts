import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveformService {

  name: string = '';
  email:string;
  company:string;
  source:string;

  noOfDevs;

  time;

  howSoon;
  skills;

  constructor() { }

  saveFirstData(data){
    this.name = data.name;
    this.email = data.email;
    this.company = data.company;
    this.source = data.source;


    console.log("My Name is",this.name)
  }

  saveStepOne(devs){
    this.noOfDevs = devs;

    console.log(this.noOfDevs);

  }

 

  
}
