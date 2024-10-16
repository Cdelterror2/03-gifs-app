import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template:`
  <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter) = "searchTag( )"
    #txtTagInput
  >
  `
})

export class SearchBoxComponent  {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) { }

  //searchTag( newTag: string ){
  searchTag(  ){
    console.log(this.tagInput);
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }


}
