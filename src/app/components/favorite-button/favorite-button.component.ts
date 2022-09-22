import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {

  @Output()
  buttonClicked : EventEmitter<any> = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }
  processButtonClick() {
    this.buttonClicked.emit();
  }

}
