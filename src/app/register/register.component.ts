import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  message: string;
  error: string;
  isLoading: Boolean;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  onRegister(form: NgForm) {
    this.isLoading = true;
    this.auth.registerUser(form.value).subscribe(
      (res) => {
        this.isLoading = false;
        form.reset();
        if (!res.error) {
          this.message = 'user registered successfully please login';
        } else {
          this.error = 'registration failed';
        }
      },
      (err) => {
        this.error = 'server error';
      }
    );
  }
}
