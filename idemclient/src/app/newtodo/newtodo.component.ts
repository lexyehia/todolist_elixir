import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addTodo(description: string) {
    return this.http.post('/api/todos', { description });
  }

}
