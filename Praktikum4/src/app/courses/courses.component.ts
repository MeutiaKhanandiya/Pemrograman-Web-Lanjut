import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  nama= 'meutia khanandiya';

  onSave($event){
    $event.stopPropagation();
    console.log("button sudah di klik",$event);
  }

  onDivClick($event){
    console.log("ini method div",$event);
  }

  onKeyUp(){
    console.log(this.nama);
  }
 
  constructor(private service:CoursesService) {
    this.Courses1=service.getCourses1();
   }
  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan=2;
  isActive=true;

  ngOnInit() {
  }
  Courses1;
}
