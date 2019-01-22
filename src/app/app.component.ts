import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './appstyles.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  date: Date = new Date();
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'yyyy-MM-dd',
    defaultOpen: false,
    closeOnSelect: true
  }  
  constructor() {

  }
  ngAfterViewInit() {

  }
  ngOnInit() {

  }
}
