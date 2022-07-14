import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = "https://localhost:44382/api/gamestore";

  httpOptions = {
    Headers: new HttpHeaders(
      {
        'content-type': 'application/json'
      }
    )
  }

  constructor(private http:HttpClient) {
  }

  getBook(){
    return this.http.get(this.url);
  }

}
