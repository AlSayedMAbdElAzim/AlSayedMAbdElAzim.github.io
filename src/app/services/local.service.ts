import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  encryptKey = "maf123" ;
  // ========================================================
  public setItem(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }
  // public setItem(key: string, value: string) {
  //   localStorage.setItem(key, value);
  // }
  // ========================================================
  public getItem(key: string) {
    let data = localStorage.getItem(key)|| "";
    return this.decrypt(data);
  }
  // public getItem(key: string) {
  //   let data = localStorage.getItem(key)|| "";
  //   return data ;
  // }
  // ========================================================
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
  // ========================================================
  public clearData() {
    localStorage.clear();
  }
  // ========================================================
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.encryptKey).toString();
  }
  // ========================================================
  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.encryptKey).toString(CryptoJS.enc.Utf8);
  }
  // ========================================================
}
