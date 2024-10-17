import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { compileNgModule } from '@angular/compiler';


@Injectable({providedIn: 'root'})
export class GifsService {
//creamos propiedad para almacenar busquedas
//https://api.giphy.com/v1/gifs/search?api_key=JSrm8rc1LKKwWKH2vITeOj5HuA41ed3Z&q=batman&limit=10

  public gifList: Gif[] = []; //almacena los gifs

  private _tagsHistory: string[] = [];
  private apiKey:     string = 'JSrm8rc1LKKwWKH2vITeOj5HuA41ed3Z'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory( tag: string){
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  searchTag( tag: string):void{
    if (tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
    .subscribe( resp => {

      this.gifList = resp.data;
      console.log({gifs: this.gifList});

    } );

  }

}
