import { Component, OnInit } from '@angular/core';
import { painting } from 'src/app/models/painting';
import { PaintingServiceService } from 'src/app/services/painting-service.service';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css']
})
export class PaintingListComponent implements OnInit {

  paintings : Array<painting> = [];

  constructor(private pservice : PaintingServiceService) { }

  ngOnInit(): void {
    this.pservice.getAllPaintings().subscribe(data => {this.paintings = data; console.log(data)});
  }

}
