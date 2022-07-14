import { Component, OnInit } from '@angular/core';
import {GameService} from "./product-list.component.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  games: any;
  gameService: GameService;

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  ngOnInit(): void {
    this.games = this.gameService.getBook().subscribe((data => {
      this.games = data;
      console.log(this.games);
    }));
  }
}
