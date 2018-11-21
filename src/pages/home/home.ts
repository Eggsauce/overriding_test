import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  myImage: string;
  myInput: string ="";
  myLink : string ="";
  result:any=[];
  data: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient, private camera: Camera) {
  
  }
  
  fourofour(){
    this.myImage = "";
  }

  drimglobal(){
    this.myImage = "assets/imgs/logo.png"; 
    this.myLink = "https://www.youtube.com/";
    const options: CameraOptions = {
    
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myImage = base64Image;
    
     }, (err) => {
      // Handle error
     });
  }

 getData(){
   var url= '//42.1.63.244/api/users?userid=aez10011&&password=123';
   this.data=this.http.get(url);
   this.data.subscribe(data =>{
     this.result = data;
   })
 }

 
}