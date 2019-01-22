import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './views/basic.html'
})
export class DatePickerExample implements OnInit {
  date: any = new Date();
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'yyyy-MM-dd',
    defaultOpen: false,
    closeOnSelect: true
  }
  constructor() {

  }
  onDateSelect(date: any){
    console.log(date);
  }
  ngOnInit() {

  }
  title: string = "Basic Example";
}
