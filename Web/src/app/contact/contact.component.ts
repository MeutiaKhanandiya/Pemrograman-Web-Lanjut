import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  yourData: boolean;
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    message: new FormControl('',Validators.required)
  });

  get name(){
    return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
  }

  get message(){
    return this.form.get('message');
  }

  data=[
    {name: '', email: '', message: ''}
  ]
  log(x){
    console.log(x);
  }
  submit(form) {
    this.yourData = true;

  }
  
  constructor() { }

  ngOnInit() 
  {
   
}


  

}