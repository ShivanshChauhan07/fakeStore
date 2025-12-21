import { Component, signal } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { CardHolder } from '../card-holder/card-holder';

@Component({
  selector: 'app-home-page',
  imports: [SearchBar, CardHolder],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  searchText = signal<string>('');
  selectBox = signal<number>(0);

  onSelectChange(value: number) {
    this.selectBox.set(value);
  }

  onSearchChange(value: string) {
    this.searchText.set(value);
  }
}
