import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
//creamos propiedad para almacenar busquedas

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  searchTag( tag: string):void{

    this._tagsHistory.unshift( tag );
  }

}
