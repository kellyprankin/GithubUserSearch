import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-search-results-grid',
  templateUrl: './search-results-grid.component.html',
  styleUrls: ['./search-results-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsGridComponent implements OnInit {

  @Input() searchResults: Array<SearchResult>;

  pageEvent = Object.assign(() => {});
  pagedSearchResults: Array<SearchResult> = [];
  pageSizeOptions = [ 5, 10, 15 ];
  pageSize = this.pageSizeOptions[0];

  startIndex = 0;
  endIndex = this.pageSize;

  constructor() { }

  ngOnInit(): void {
    this.pagedSearchResults = this.searchResults.slice(0, this.pageSizeOptions[0]);
  }

  public onPageChange(event: PageEvent): void {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;

    if(this.endIndex > this.searchResults.length) {
      this.endIndex = this.searchResults.length;
    }

    this.pagedSearchResults = this.searchResults.slice(this.startIndex, this.endIndex);
  }

  public viewUser(userUrl: string) {
    window.open(userUrl);
  }
}
