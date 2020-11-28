import { Component, OnInit,  VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  E-mail:string;
  password:string;
  constructor() { }

  ngOnInit() {

  }
  LoginUser()
{
  if(this.E-mail == "Admin" && this.password == "admin123")
  {
    console.log("Welcome");
  }
  }
}
  