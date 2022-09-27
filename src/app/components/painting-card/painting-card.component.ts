import { Component, OnInit, Input } from '@angular/core';
import { painting } from 'src/app/models/painting';
import { PaintingServiceService } from 'src/app/services/painting-service.service';

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.css']
})
export class PaintingCardComponent implements OnInit {

  style : any = {}

  @Input()
  Painting : painting = {title:"", url:"", artistID:0};
  constructor(private pservice : PaintingServiceService) { }

  ngOnInit(): void {
  }

  addFavorite(): void{
    this.style = {'font-weight' : 'bold'}
    this.pservice.favoritePainting(this.Painting);
  }
}
