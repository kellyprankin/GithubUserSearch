import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  isLoading = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public onSearchOccurred(searchTerm: string) {
    // this.searchResults$ = of([
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio", profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult,
    //   { username: 'kelly', followerCount: 99, starCount: 11, bio: "hi my bio",  profileAvatarUrl: 'https://avatars0.githubusercontent.com/u/1892611?s=460&u=ac5212b9090b80e0e5c538b2cef411d19b01535c&v=4'} as SearchResult
    // ]);

    this.searchResults$ = this.searchService.getSearchResults(searchTerm).pipe(tap(() => this.isLoading = true));
  }
}
