import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    const LoginObserver = {
      next: (x: any) => {
        // redirect to home page
        console.log(x);
        this.router.navigate(['']);
        console.log('Successfully logged in');
      },
      error: (err: any) => {
        console.error(err);
      },
    };
    this.authService.login(f.value).subscribe(LoginObserver);
    console.log(f.value);
    console.log(f.valid);
  }
}
