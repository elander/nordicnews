import { Component, OnDestroy, OnInit } from '@angular/core';

import { NewsapiService } from '../newsapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private api: NewsapiService) { }
  subscription = new Subscription;
  enterdata: any[] = [];
  ngOnInit(): void {
    this.subscription = this.api.enterHeadlines().subscribe(
      result => {
        console.log(result);
        this.enterdata = result.articles;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
