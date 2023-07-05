import { Component } from '@angular/core';
import { Settings, AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-admin-options',
  templateUrl: './admin-options.component.html',
  styleUrls: ['./admin-options.component.scss']
})
export class AdminOptionsComponent {
  public showOptions:boolean = false;
  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
  }

  public changeTheme(theme){
    this.settings.theme = theme;       
  } 
}