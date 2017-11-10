import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todolist: Array<any>;

  constructor(private http: HttpClient) {}

  processSubmit(event: string) {
    this.todolist.unshift({description: event});
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    return this.http.get('/api/todos').subscribe((resp: any) => {
      this.todolist = resp.data;
    });
  }
}
