import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/*Material Design and Flex Layout*/
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

/*Google Adsense
import {AdsenseModule} from 'ng2-adsense';
*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    /*
    AdsenseModule.forRoot({
      adClient:'ca-pub-2867268952950955'
    }),
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
