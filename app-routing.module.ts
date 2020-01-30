import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {SponsorsComponent} from './sponsors/sponsors.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'aboutus' , component: AboutusComponent},
  {path: 'sponsors' , component: SponsorsComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
