import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodolistComponent implements OnInit {

  list = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
