import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { TodosComponent } from './component/todos/todos.component';

import { HttpClientModule } from '@angular/common/http';
import { CompletedComponent } from './component/completed/completed.component';
import { NotcompleteComponent } from './component/notcomplete/notcomplete.component';
import { OneComponent } from './component/component123/one/one.component';
import { TwoComponent } from './component/component123/two/two.component';
import { ThreeComponent } from './component/component123/three/three.component';
import { FormsModule } from '@angular/forms';
import { TodoDashboardComponent } from './component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { GetConformComponent } from './component/get-conform/get-conform.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TodosComponent,
    CompletedComponent,
    NotcompleteComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoFormComponent,
    GetConformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
