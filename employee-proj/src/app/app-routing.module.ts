import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmpComponent } from './add-emp/add-emp.component'
import { ShowEmpComponent}  from './show-emp/show-emp.component'
import {UpdateEmpComponent} from './update-emp/update-emp.component';


const routes: Routes = [
	{path: 'add-employee', component: AddEmpComponent},
  	{path: 'show-employee', component: ShowEmpComponent},
  	{path: 'update-employee/:id',component: UpdateEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
