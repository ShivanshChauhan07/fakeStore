import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchItem: string = '';
  selectBox: number = 0;

  @Output() searchChange = new EventEmitter<string>();
  @Output() selectChange = new EventEmitter<number>();

  onSearchChange() {
    this.searchChange.emit(this.searchItem);
  }

  onSelectChange() {
    this.selectChange.emit(this.selectBox);
  }
}
