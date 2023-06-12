import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Company } from 'src/app/models/company';
import { ApiConstant } from 'src/app/constants/api-constant';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.scss']
})
export class TipsListComponent {
  tipCode: number;
  tipText: string;
  tipStatus: string;
  tipPIC: File;
  tipPicName: string;

  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;

  constructor(private http: HttpClient,
            private globalServ: GlobalService){}

  onTextChanged(event: any){
    this.tipText = event.target.value ;
  }
  // ===============================================================
  onImageChanged(event: any){
    this.tipPIC = event.target.files[0] ;
    this.tipPicName = this.tipPIC.name ;
  }
  // ================================================================
  defaultCusImage=new ApiConstant().noImage;
  CusImageToUpload:File=null;
  handelCUSImgInput(file:FileList)
  {
    this.CusImageToUpload=file.item(0);    
    var CUSImgreader=new FileReader();
    CUSImgreader.onload=(event:any)=>{
    this.defaultCusImage=event.target.result;
    }
    CUSImgreader.readAsDataURL(this.CusImageToUpload);
  }
  // ================================================================
  newTip(){
    const uploadData = new FormData();
    uploadData.append('TIPText', this.tipText);
    // uploadData.append('TIPPIC', this.tipPIC, this.tipPIC.name);
    uploadData.append('TIPPIC', this.CusImageToUpload);

    // var object = {};
    // uploadData.forEach((value, key) => object[key] = value);
    // var jsonStr = JSON.stringify(object);

    this.http.post(this.baseUrl + this.secondPartUrl + 'atlas/tips/', uploadData, this.globalServ.getAuthHeaders_for_files() )
    .subscribe(data => console.log(data), error => console.log(error) ) ;
  }

}