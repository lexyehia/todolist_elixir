import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  list = 'Windstorm';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/todos').subscribe(data => {
      console.log(data);
    })
  }

}
