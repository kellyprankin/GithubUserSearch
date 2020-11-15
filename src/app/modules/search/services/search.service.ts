import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SearchResult } from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = "https://api.github.com/search/users";

  constructor(private httpClient: HttpClient) { }

  public getSearchResults(searchTerm: string) : Observable<Array<SearchResult>>
  {
    return this.httpClient
      .get(this.apiUrl, { params: { q: searchTerm} } )
      .pipe(
        switchMap((searchResults: any) => 
          this.getUsersFromSearchResults(searchResults)
        )
      );
  }

  public getUsersFromSearchResults(searchResults: any) : Observable<Array<SearchResult>> {
    var finalResult: Array<Observable<SearchResult>> =
      searchResults.items.map((searchResultItem : any) => 
        forkJoin(
          [
            this.httpClient.get<Array<any>>(searchResultItem.url)
            //this.httpClient.get<Array<any>>(searchResultItem.starred_url.split('{')[0])  //this turned out to be problematic because of rate limiting
          ]
        )
        .pipe(
          switchMap((mainResult: any) => 
           of({
              bio: mainResult[0].bio,
              username: mainResult[0].login,
              htmlUrl: mainResult[0].html_url,
              profileAvatarUrl: mainResult[0].avatar_url,
              followerCount: mainResult[0].followers,
              followingCount: mainResult[0].following
            } as SearchResult),
          ),
        )
    );

    return forkJoin(finalResult);
  }
}


