import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodolistComponent } from '../todolist/todolist.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  todoDescription: string;

  @Output()
  onSubmit = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  addTodo() {
    return this.http.post('/api/todos', {
      todo: { description: this.todoDescription }
    }).subscribe(resp => {
      this.onSubmit.emit(this.todoDescription);
    });
  }
}
