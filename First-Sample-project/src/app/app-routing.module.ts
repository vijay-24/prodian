import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { SportComponent } from './sport/sport.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'sport',component:SportComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'about',component:AboutComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
