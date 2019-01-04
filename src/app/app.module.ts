import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLibraryLibModule } from 'my-library-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibraryLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
