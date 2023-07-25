import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PapperAdvantageComponent } from './papper-advantage/papper-advantage.component'; 
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    HomeComponent,
    FeedbackComponent,
    LoginComponent,
    StarRatingComponent,
    PapperAdvantageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
