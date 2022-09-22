import { Component, OnInit, Input } from '@angular/core';
import { painting } from 'src/app/models/painting';
import { PaintingServiceService } from 'src/app/services/painting-service.service';

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.css']
})
export class PaintingCardComponent implements OnInit {

  @Input()
  Painting : painting = {title:"", url:"", artistID:0};
  constructor(private pservice : PaintingServiceService) { }

  ngOnInit(): void {
  }

  addFavorite(): void{
    this.pservice.favoritePainting(this.Painting);
  }
}
