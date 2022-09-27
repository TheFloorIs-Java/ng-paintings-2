import { Component, OnInit, OnChanges } from '@angular/core';
import { PaintingServiceService } from 'src/app/services/painting-service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  textVar:String = "";
  url:string = "";
  artistId:number = 0;


  constructor(private pservice : PaintingServiceService) { }

  ngOnInit(): void {
  }
  // ngOnChanges(): void {
  //   let newText = "";
  //   for(let i = 0; i < this.textVar.length; i++){
  //     if(!(this.textVar.charAt(i)=="0")){
  //       newText = newText+this.textVar.charAt(i);
  //     }
  //   }
  //   this.textVar = newText;
  // }
  add():void{
      if(this.textVar.includes("0")){
        alert("invalid input: no zeroes!!!");
      }else{
        this.pservice.addPainting(this.textVar, this.url, this.artistId);
      }
  }
}
