import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AppSettings, Settings } from '../app.settings';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from './components/menu/menu.service';
import { AppConstant } from 'src/app/constants/app-constant';
import { GlobalService } from 'src/app/services/global.service';
import { LocalService } from 'src/app/services/local.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { StaffService } from 'src/app/services/staff.service';
import { ApiConstant } from 'src/app/constants/api-constant';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('sidenav') sidenav:any;
  public userImage = 'assets/images/others/user.jpg';
  urlAccountImage ;
  account: User = new User();
  userSUb: Subscription ;
  public settings:Settings;
  public menuItems:Array<any>;
  public toggleSearchBar:boolean = false;
  constructor(private localStore: LocalService, public global: GlobalService,
              private staff:StaffService,
              public appSettings:AppSettings,
              public router:Router,
              private menuService: MenuService){
    this.settings = this.appSettings.settings;
  }
  // ==================================================================
  accountID ;
  ngOnInit() {
    this.urlAccountImage= new ApiConstant().noImage;
    // ---------------------------------------------------------------
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    // -------------Check if current user Connected-------------------------
    if (this.localStore.getItem('token') && this.localStore.getItem('account') ) {
      var values = JSON.parse(this.localStore.getItem("account")) ;
      this.accountID = values['id'] ;
      this.getOneUser(this.accountID) ;
      // this.router.navigate(['/']);
    }
    // ----------------------------------------------------------------------
    if(window.innerWidth <= 960){
      this.settings.adminSidenavIsOpened = false;
      this.settings.adminSidenavIsPinned = false;
    };
    setTimeout(() => {
      this.settings.theme = new AppConstant().themeColor ; // 'blue';
    });
    this.menuItems = this.menuService.getMenuItems();
  }
  // ==================================================================
  getOneUser(id:number)
    {
      this.staff.getOneUserbyId(id).subscribe((oneUser:User)=>{
      // this.userPic=oneUser.userPicture;
      // this.userCode=oneUser.UserCode;
      this.global.me = oneUser ;
      this.urlAccountImage = oneUser['userPicture'] ;
      // console.log("======Admin.component.ts===getOneUser(id:number)======");
      // console.log(oneUser['userPicture']);
      })
    }
  // ==================================================================
  // ==================================================================
  logout()
  {
    // console.log("======Admin Logout========");
    this.urlAccountImage= new ApiConstant().noImage;
    this.global.me = new User();
    this.localStore.removeItem('token');
    this.localStore.removeItem('account');
    this.router.navigate(['/sign-in']);
    this.global.userLoggedIn = false ;
  }
  // ==================================================================
  ngAfterViewInit(){
    if(document.getElementById('preloader')){
      document.getElementById('preloader').classList.add('hide');
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
      if(window.innerWidth <= 960){
        this.sidenav.close();
      }
    });
    this.menuService.expandActiveSubMenu(this.menuService.getMenuItems());
  }

  public toggleSidenav(){
    this.sidenav.toggle();
  }

  public scrollToTop(){
    var scrollDuration = 200;
    var scrollStep = -window.pageYOffset  / (scrollDuration / 20);
    var scrollInterval = setInterval(()=>{
      if(window.pageYOffset != 0){
         window.scrollBy(0, scrollStep);
      }
      else{
        clearInterval(scrollInterval);
      }
    },10);
    if(window.innerWidth <= 768){
      setTimeout(() => {
        window.scrollTo(0,0);
      });
    }
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    if(window.innerWidth <= 960){
      this.settings.adminSidenavIsOpened = false;
      this.settings.adminSidenavIsPinned = false;
    }
    else{
      this.settings.adminSidenavIsOpened = true;
      this.settings.adminSidenavIsPinned = true;
    }
  }

}
