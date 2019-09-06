import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductlistComponent} from './productlist/productlist.component';
import {ProducnameComponent} from './producname/producname.component';
import {InvalidpageComponent} from './invalidpage/invalidpage.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'producname', component:ProducnameComponent},
  { path:'productlist', component:ProductlistComponent},
  { path: '', component:ProducnameComponent},
  { path: '**', component:InvalidpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
