import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(public api: NewsapiService) { }

  ngOnInit(): void {
    console.log('hejsan')
  }

}
