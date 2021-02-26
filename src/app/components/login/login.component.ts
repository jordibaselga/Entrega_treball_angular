import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  usuari: User= {login: 'ejemplo@gmail.com', passwd: '1234'};
  recordar: Boolean = false;

  constructor( private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    if( localStorage.getItem('login')) {
      this.usuari.login =  localStorage.getItem('login');
      this.recordar = true;

    }
  }

  login($event) :void {
    $event.preventDefault();
  this.authService.authUser(this.usuari, this.recordar).subscribe(
    u => {
      console.log(u, localStorage.getItem('token'), localStorage.getItem('login'));
      this.router.navigate(['cataloge'])
    },
    error => console.log(error),
    () => console.log('login')
  );
  }


}
