import { Component } from '@angular/core';
import {ExampleService} from './example.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  providers: [ExampleService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 Imageurl = "https://angular.io/assets/images/logos/angular/angular.png";

 title:string;

 myMethod(){
    
     console.log('This is pratap');
 }

  myMethod2(){
    
     console.log('This is an example with Hover');
 }

 constructor(private _exampleService: ExampleService){

 }

 ngOnInit(){
      
      this.title = this._exampleService.someMethod();
 }

}
