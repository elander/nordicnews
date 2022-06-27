import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScienceComponent } from './science/science.component';

@NgModule({
  declarations: [
    AppComponent,
    EntertainmentComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
