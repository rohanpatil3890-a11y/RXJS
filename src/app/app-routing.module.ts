import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { TodosComponent } from './component/todos/todos.component';
import { CompletedComponent } from './component/completed/completed.component';
import { NotcompleteComponent } from './component/notcomplete/notcomplete.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent,
  },
    {
      path : 'todos',
      component : TodosComponent
    },
    {
      path : 'completed',
      component : CompletedComponent
    },
    {
      path : 'notcompleted',
      component : NotcompleteComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
