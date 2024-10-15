import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template:`
  <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
  >
  `
})

export class SearchBoxComponent  {
  constructor() { }


}
