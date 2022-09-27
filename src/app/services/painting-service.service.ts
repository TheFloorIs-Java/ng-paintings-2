import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { painting } from '../models/painting';

@Injectable({
  providedIn: 'root'
})
export class PaintingServiceService {

  favorites : Array<painting> = [];

  constructor(private http: HttpClient){
        
  }
  getAllPaintings() : Observable<Array<painting>> {
      return this.http.get<Array<painting>>("https://tedspaintings.azurewebsites.net/paintings");
  }
  addPainting(titleInput:String, url:string, artistID:number) : void {
       this.http.post<any>("https://tedspaintings.azurewebsites.net/paintings", 
       {title:titleInput, url:"url.com", artistID:artistID}).subscribe(data=>console.log(data));
  }
  favoritePainting(selected : painting) {
    this.favorites.push(selected); 
    console.log(this.favorites);
  }
}