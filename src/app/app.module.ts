import { LOCALE_ID,NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import { CommonModule,registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

registerLocaleData(localePt);
registerLocaleData(localeEn);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
