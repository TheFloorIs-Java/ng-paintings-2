import { Component, OnInit } from '@angular/core';
import { PaintingServiceService } from 'src/app/services/painting-service.service';
import { painting } from 'src/app/models/painting';

@Component({
  selector: 'app-drop-down-favorites',
  templateUrl: './drop-down-favorites.component.html',
  styleUrls: ['./drop-down-favorites.component.css']
})
export class DropDownFavoritesComponent implements OnInit {

  visible:boolean = false;

  constructor(private pservice : PaintingServiceService) { }

  ngOnInit(): void {
  }

  changeDropdown() : void {
    this.visible = !this.visible
  }

  getFavoritesFromService() : Array<painting> {
    return this.pservice.favorites;
  }

}
