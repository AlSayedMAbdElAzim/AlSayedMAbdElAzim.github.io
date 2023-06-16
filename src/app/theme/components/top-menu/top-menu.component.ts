import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../../app.service';
import { Settings, AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent implements OnInit {
  public currencies = ['USD', 'EUR'];
  public currency:any;

  public settings: Settings;
  constructor(public appSettings:AppSettings, public appService:AppService, public translateService: TranslateService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.currency = this.currencies[0];
  }

  public changeCurrency(currency){
    this.currency = currency;
  }

  curLangu: String ;
  public changeLang(lang:string){
    this.translateService.use(lang);

    // this.curLangu = this.translateService.currentLang ;
    // console.log("=top-menu===CurLang is:: "+ this.curLangu + " and new lang is:: "+ lang );
    // if (this.curLangu != lang) {
    //   this.translateService.setDefaultLang(lang);
    // }
  }

  public getLangText(lang){
    if(lang == 'de'){
      return 'German';
    }
    else if(lang == 'fr'){
      return 'French';
    }
    else if(lang == 'ru'){
      return 'Russian';
    }
    else if(lang == 'tr'){
      return 'Turkish';
    }
    else if(lang == 'ar'){
    //   this.settings = (
    //     name:'{{ 'COMPANY.NAME' | translate }}',  // theme name
    //     theme: 'green',     // green, blue, red, pink, purple, grey
    //     rtl: true,       // true = rtl, false = ltr
    //     adminSidenavIsOpened: true,        // adminSidenavIsOpened
    //     adminSidenavIsPinned: true,        // adminSidenavIsPinned
    //     adminSidenavUserBlock: true,        // adminSidenavUserBlock
    //     mainToolbarFixed: false        // mainToolbarFixed
    // ) ;
      return 'عربي';
    }
    else{
      return 'English';
    }
  }

}
