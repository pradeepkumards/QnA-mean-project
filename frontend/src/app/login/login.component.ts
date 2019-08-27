import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    submitMessage: string;
    username = new FormControl('', Validators.compose([Validators.required]));
    password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));

    constructor(private authService: AuthenticationService, private routeService: RouterService) {
  }

  ngOnInit(){
    sessionStorage.clear();
  }

    loginSubmit() {
      this.submitMessage = '';
      // console.log(this.authService.authenticateUser({ 'emailId': this.username.value, 'password': this.password.value }))
      this.authService.authenticateUser({ 'emailId': this.username.value, 'password': this.password.value })
                      .subscribe(data => {
                                          // console.log("1111111111111111111");
                                          console.log(data);
                                          // console.log("1111111111111111111");
                                          this.authService.setBearerToken(data['token']);
                                          // this.authService.setUserId(data['user'].userId);
                                          this.routeService.routeToDashboard();
                                          // this.routeService.routeToTopics();
                                          this.authService.isLoggedIn.emit(true);
                                        }
                                  , err => {
                                    // console.log("44444444444444444")
                                    console.log(err.error)                                    
                                    // console.log("44444444444444444")
                                            if (err.error !== undefined) {
                                              this.submitMessage = err.error.message;
                                              alert("Wrong credentials, try with correct one!");
                                            } else {
                                              this.submitMessage = err.message;
                                              alert(this.submitMessage);                                              
                                            }
                                          }
                                  );
    }
}
