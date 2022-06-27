import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface News {
  status: string,
  totalResults: number,
  articles: string[],
}

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  sciencetest: Observable<any> = {} as Observable<any>;
  constructor(private _http: HttpClient) {
    this.sciencetest = this._http.get(this.scienceNews);
   }

  entertainmentNews='https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=93db02f9184b418b957e511a5733c46a';

  scienceNews='https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=93db02f9184b418b957e511a5733c46a';

  scienceHeadlines(): Observable<any>{
    return this._http.get(this.scienceNews);
  }
// returns an Observable<Object>
  enterHeadlines(): Observable<any> {
    return this._http.get(this.entertainmentNews);
  }


}
