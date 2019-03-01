import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "belajar angular";
  
  constructor(private service:CoursesService) {
    this.Courses=service.getCourses1();
   }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

  Courses = [
    {id:0, name:"html"},
    {id:1, name:"php"},
    {id:2, name:"angular"},
    {id:3, name:"css"}
  ]

}
