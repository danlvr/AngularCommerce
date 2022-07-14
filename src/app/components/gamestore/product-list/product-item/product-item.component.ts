import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../model/Game";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  game!: Game;
  constructor() { }

  ngOnInit(): void {
  }

}
