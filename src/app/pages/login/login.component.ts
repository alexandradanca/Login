import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  url: string = 'https://freeapi.miniprojectideas.com/api/User/Login';
  http = inject(HttpClient);

  constructor (private router: Router){

  }

  onLogin() {
    this.http.post(this.url, this.loginObj).subscribe((res: any) =>{
      if(res.result){
        alert("Login success!");
        localStorage.setItem("angular18Login", this.loginObj.User);
        this.router.navigateByUrl("dashboard");
      } else {
        alert("Check email or password!");
      }
    });
  }

}
