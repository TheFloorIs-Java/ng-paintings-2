import { Component, OnInit } from '@angular/core';
import { PaintingServiceService } from 'src/app/services/painting-service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  textVar:any = "";

  constructor(private pservice : PaintingServiceService) { }

  ngOnInit(): void {
  }
  add():void{
      this.pservice.addPainting(this.textVar)
  }

}
