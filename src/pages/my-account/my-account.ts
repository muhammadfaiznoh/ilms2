import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {UserService} from '../../services/user-service';
import {ChangePasswordPage} from "../change-password/change-password";
import { ProfilePage } from '../profile/profile';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html'
})
export class MyAccountPage {
  createdCode = null;
  constructor(public nav: NavController, public userService: UserService) {
    this.createdCode = "ID123456";
  }

  // go to changing password page
  changePassword() {
    this.nav.push(ChangePasswordPage);
  }
  profile() {
    this.nav.push(ProfilePage);
  }
}
