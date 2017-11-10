import { ResponseBodyHandler } from '_debugger';
import { format } from 'path';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  todoDescription: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addTodo() {
    return this.http.post('/api/todos', {
      description: this.todoDescription
    }).subscribe((resp: any) => console.log(resp));
  }
}
