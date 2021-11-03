import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { GmailComponent } from './gmail/gmail.component';

const routes: Routes = [
  {path:'',component:OneComponent},
  {path:'two',component:TwoComponent},
  {path:'gmail',component:GmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
