import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { componentRefresh } from '../../node_modules/@angular/core/src/render3/instructions';
import { PlaneTypeListComponent } from './plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component';
import { PlaneTypeService } from './PlaneType/Service/plane-type.service';
import { HomeComponent } from './home/home.component'

// const appRoutes: Routes = [
//  { path: '/home', component: HomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PlaneTypeListComponent,
    PlaneTypeDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule     
  ],
  providers: [
    PlaneTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
