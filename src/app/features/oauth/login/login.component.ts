import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Api } from '../../..api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = '';
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  
  constructor(
    private api: Api,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('minlength') ? 'Min 5 characters required' :
            '';
  }

  login() {
    this.error = '';
    this.api.github.loginViaBasicAuth(this.username.value, this.password.value).subscribe(result => {
      this.router.navigateByUrl('/manage-posts');      
    }, error => {
      this.error = 'Username/Password Mismatch';
    })
  }

}