import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoModule } from './forms/todo/todo.module';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'todo', 
  loadChildren:()=> import('./forms/todo/todo.module').then(m => m.TodoModule),
  canActivate: [AuthGuard]
  }
  //{path:'todo',component:TodoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
