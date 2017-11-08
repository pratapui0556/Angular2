import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.router';
import { AppComponent } from './app.component';
import{AboutComponent} from './about/about.component';
import{ServicesComponent} from './services/services.component';


 
@NgModule({
 
  imports: [
    BrowserModule,
    routes 
   


  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent, AboutComponent, ServicesComponent],



})
export class AppModule {

	
 }
