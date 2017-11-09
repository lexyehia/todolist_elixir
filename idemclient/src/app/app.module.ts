import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { NewtodoComponent } from './newtodo/newtodo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    NewtodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
