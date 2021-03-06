import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }   from '../components/home/home.component';
import { MyWorkComponent }     from '../components/my-work/my-work.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
 
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work',component: MyWorkComponent },
  { path: '**', component: NotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}