import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  hidden = false;

  @Input()
  todo: any;

  ngOnInit() { }

  deleteTodo() {
    this.http.delete(`/api/todos/${this.todo.id}`).subscribe((resp) => {
      this.hidden = true;
    });
  }
}
