import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    const RegisterObserver = {
      next: (x: any) => {
        // redirect to home page
        console.log(x);
        this.router.navigate(['']);
        console.log('Successfully registered');
      },
      error: (err: any) => {
        console.error(err);
      },
    };
    this.authService.register(f.value).subscribe(RegisterObserver);

    console.log(f.value);
    console.log(f.valid);
  }
}
