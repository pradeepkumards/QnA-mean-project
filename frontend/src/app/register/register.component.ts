import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  submitMessage: string;
  username = new FormControl('', Validators.compose([Validators.required]));
  password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));
  emailid = new FormControl('', Validators.compose([Validators.required]));
  

  constructor(private authService: AuthenticationService, private routeService: RouterService) {
  }

  registerSubmit() {
      this.submitMessage = '';
      this.authService.registerUser({ 'username': this.username.value, 'password': this.password.value, 'emailId':this.emailid.value })
                      .subscribe(data => {
                                          this.authService.setBearerToken(data['token']);
                                          this.routeService.routeToLogin();
                                          this.authService.isLoggedIn.emit(true);
                                        }
                                  , err => {
                                            if (err.error !== undefined) {
                                              this.submitMessage = err.error.message;
                                              alert(err.error.error)
                                            } else {
                                              this.submitMessage = err.message;
                                              alert(err.error.error)
                                              
                                            }
                                          }
                                  );
    }

}
