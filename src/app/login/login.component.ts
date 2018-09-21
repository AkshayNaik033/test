import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RestcallsService } from '../restcalls.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private router: Router, private restCallsService: RestcallsService) { }

  ngOnInit() {
    this.restCallsService.getAPIData().subscribe((response) => {
      console.log('response is ', response)
    }, (error) => {
      console.log('error is ', error)
    })
  }
  login() {
    var loginDetails = {
      email:this.email,
      pwd:this.password
    }
    this.restCallsService.getLoginDetails(loginDetails).subscribe((response) => {
     if(response == true)
     this.router.navigate(['user']);
    }, (error) => {
      console.log('error is ', error)
    })
  
    // if (this.email == 'akshaynaik033@gmail.com' && this.password == 'p') {
    //   this.router.navigate(['user']);
    // } else {
    //   alert("Invalid credentials.")
    // }
  }
}
