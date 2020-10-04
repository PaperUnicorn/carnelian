import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModule } from 'src/app/user/user.module';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(private authService : AuthService, private router: Router) {}

  ngOnInit(): void {
  }


  async login(){
    let user = {
      username : this.username,
      password : this.password
    };
    console.log(user)
    const resp = this.authService.login(user).then( e=> {
      
    }).catch( e=> {
      if(e.status == 200)
        this.router.navigate(['/dashboard'])
      else
        console.log(e)
    })

  }

  logout(){

  }
}
