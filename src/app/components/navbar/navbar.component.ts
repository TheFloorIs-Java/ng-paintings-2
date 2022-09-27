import { Component, OnInit } from '@angular/core';
import { painting } from 'src/app/models/painting';
import { PaintingServiceService } from 'src/app/services/painting-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pservice : PaintingServiceService) { }

  ngOnInit(): void {
  }

  

}
