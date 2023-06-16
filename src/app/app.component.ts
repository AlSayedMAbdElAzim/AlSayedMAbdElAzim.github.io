import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Settings, AppSettings } from './app.settings';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curLangu: String ;
  allLangu: String[] ;
  loading: boolean = false;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
              public router: Router,
              @Inject(PLATFORM_ID) private platformId: Object,
              public translate: TranslateService){
    this.settings = this.appSettings.settings;
    this.settings.rtl = true ;
    translate.addLangs(['en','de','fr','ru','tr','ar']);
    translate.setDefaultLang('ar');
    translate.use('ar');

// // ============هذا الجزء للتجربة بعدم الفتح بالانجليزي لو تم تغييره==============
//     this.curLangu = translate.currentLang ;
//     this.allLangu = translate.getLangs() ;
//     console.log("this.curLangu::: "+this.curLangu + "  this.allLangu::: "+this.allLangu);
//     if (this.allLangu.indexOf(this.curLangu) > -1 && this.curLangu != 'en')
//       {
//         console.log("=====Not E======");
//       }
//     else
//       {
//         console.log("=====is E======");
//         translate.setDefaultLang('en');
//         translate.use('en');
//       }
// // ==================================================

  }

  ngOnInit() {
   // this.router.navigate(['']);  //redirect other pages to homepage on browser refresh
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0,0);
        }
      }
    })
  }
}
