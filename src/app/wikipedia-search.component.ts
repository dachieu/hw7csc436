import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'wikipedia-search',
  template: `
    <div>
      <h2>Wikipedia Search</h2>
      <input type="text" [formControl]="term">
      <ul>
        <li *ngFor="let item of items | async">{{item}}</li>
      </ul>
    </div>  
  `
})
export class WikipediaSearchComponent {

  items: Observable<Array<string>>;
  term = new FormControl();
  
  constructor(private wikipediaService: WikipediaService) {}
  
  ngOnInit() {
    this.items = this.term.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(term => this.wikipediaService.search(term));
  }
}
