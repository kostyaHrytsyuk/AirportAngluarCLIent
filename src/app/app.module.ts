import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlaneTypeListComponent } from './PlaneType/plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component';
import { PlaneTypeService } from './PlaneType/Service/plane-type.service';
import { HomeComponent } from './home/home.component';
import { StewardessesListComponent } from './Stewardess/stewardesses-list/stewardesses-list.component';
import { StewardessService } from './Stewardess/Service/stewardess.service';
import { FormsModule } from '@angular/forms';
import { StewardessDetailsComponent } from './Stewardess/stewardess-details/stewardess-details.component';

// const appRoutes: Routes = [
//  { path: '/home', component: HomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PlaneTypeListComponent,
    PlaneTypeDetailsComponent,
    HomeComponent,
    StewardessesListComponent,
    StewardessDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlaneTypeService,
    StewardessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
