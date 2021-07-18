import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textColor = 'blue';
  title = "Courses outline";
  currentLesson = null;
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  updateColor(){
    this.textColor = "salmon";
    console.log('update color');
  }
  selectLesson(lesson){
    this.currentLesson = lesson;
    console.log("Current lesson: ", this.currentLesson)
  }

}
