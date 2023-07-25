import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PapperAdvantageComponent } from './papper-advantage/papper-advantage.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home', component:HomeComponent, canActivate:[AuthGuard]
  },
  {
    path:'feedback',component:FeedbackComponent
  },
  {
    path:'Pepper',component: PapperAdvantageComponent
  },
  {path:'left', component:LeftNavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
