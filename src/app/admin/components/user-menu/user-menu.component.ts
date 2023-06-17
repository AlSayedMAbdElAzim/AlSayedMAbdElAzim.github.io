import { KeyValue } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/user';
import { oneUser } from 'src/app/models/userForEdit';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';
import { ApiConstant } from 'src/app/constants/api-constant';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  account: User = new User();
  userSUb: Subscription ;
  public userImage = 'assets/images/others/user.jpg';
  userPic ;
  urlAccountImage ;

  constructor(private localStore: LocalService, public global: GlobalService,
              private router: Router)
   { }

  // ==================================================================
  logout()
  {

    this.urlAccountImage= new ApiConstant().noImage;
    this.global.me = new User();
    this.localStore.removeItem('token');
    this.localStore.removeItem('account');
    this.global.userLoggedIn = false ;
    // this.router.navigate(['/sign-in']);

    this.router.navigate(['/']) .then(() => {
                                        window.location.reload();
                                      });

  }
  // ==================================================================

  ngOnInit(): void {
    this.urlAccountImage= new ApiConstant().noImage;
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    if (this.localStore.getItem('token') && this.localStore.getItem('account') ) {
      this.global.me = JSON.parse(this.localStore.getItem('account') );
      this.global.userLoggedIn = true ;

      // console.log("====User Pic first_name=========");
      var values = JSON.parse(this.localStore.getItem("account")) ;

      // for (const index in values) {
      //   if (index.includes('first_name')) {
      //     console.log(values[index]);
      //   }
      // }

      // console.log(values['userPicture']);
      this.urlAccountImage = values['userPicture'] ;

      // for (this.k in values){
      //   if (this.k === 'FullName') {
      //     console.log(this.k);
      //     console.log(values[this.k]);
      //   }
      // }

      // console.log(this.userPic);
    } else {
      this.global.userLoggedIn = false ;
      this.urlAccountImage = this.userImage ;
      this.router.navigate(['/sign-in']);
    }
  }
  // ==================================================================

}
