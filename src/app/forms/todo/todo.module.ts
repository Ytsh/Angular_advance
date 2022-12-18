import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { RouterModule, Routes } from '@angular/router';
import { todoFeatureKey, todoReducer } from './store/todo.reducer';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {path: '', component: TodoComponent}
];

@NgModule({
  declarations: [
    TodoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(todoFeatureKey, todoReducer)
  ],
  exports:[
    RouterModule,
    // TodoModule
  ]
})
export class TodoModule { }
