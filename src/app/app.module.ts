import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { componentRefresh } from '../../node_modules/@angular/core/src/render3/instructions';
import { PlaneTypeListComponent } from './PlaneType/plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component';
import { PlaneTypeService } from './PlaneType/Service/plane-type.service';
import {CommonModule} from '@angular/common'

const appRoutes: Routes = [
 { path: '', component: AppComponent }
] ;

@NgModule({
  declarations: [
    AppComponent,
    PlaneTypeListComponent,
    PlaneTypeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    PlaneTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
