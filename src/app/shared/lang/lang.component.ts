import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  constructor(public translateService: TranslateService) { }

  ngOnInit() { }
  curLangu: String ;
  public changeLang(lang:string){
    this.translateService.use(lang);

    // this.curLangu = this.translateService.currentLang ;
    // console.log("=lang===CurLang is:: "+ this.curLangu + " and new lang is:: "+ lang );
    // if (this.curLangu != lang) {
    //   this.translateService.setDefaultLang(lang);
    // }
  }

}
