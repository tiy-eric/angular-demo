import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-things',
  templateUrl: './favorite-things.component.html',
  styleUrls: ['./favorite-things.component.css']
})
export class FavoriteThingsComponent implements OnInit {

  selectedThing: object;

  favoriteThingsArray: any[] = [
    {id: 1, thingName: "Ice Cream"},
    {id: 2, thingName: "Puppies"},
    {id: 3, thingName: "Chinese Food"},
    {id: 4, thingName: "Joe Hults"},
    {id: 5, thingName: "Sleep"}
  ]

  constructor() { }

  ngOnInit() {
  }

  onSelect(potato: object): void {
    this.selectedThing = potato;
  }

}
