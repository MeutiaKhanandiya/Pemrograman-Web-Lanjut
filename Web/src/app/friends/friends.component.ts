import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FilterPipe } from 'ngx-filter-pipe';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  
  log(z) {
      console.log(z);
    }

    coursesForOne=[
      {id:1, name:'Meutia', email:'Khanandyam@gmail.com', contact:'082246619492'}
      ]
    userFilter: any = {name: '' };

    submit(form){
      this.coursesForOne.push({id: this.coursesForOne.length + 1, name: this.uppercase(form.nama), email: form.email, contact: form.contact});
      form.valid;
     }


     uppercase(nama){
      return nama.toUpperCase();
    }
    constructor(private filterPipe: FilterPipe){
      console.log(filterPipe.transform(this.coursesForOne, {name: ''}));
    }
  }