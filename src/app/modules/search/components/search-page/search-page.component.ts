import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResult } from '../../models/search-result.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {
  searchResults$: Observable<Array<SearchResult>>;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public onSearchOccurred(searchTerm: string) {
    this.searchResults$ = this.searchService.getSearchResults(searchTerm);
  }
}
