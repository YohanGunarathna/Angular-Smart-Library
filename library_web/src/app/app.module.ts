import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddDvdComponent } from './add-dvd/add-dvd.component';
import { BorrowComponent } from './borrow/borrow.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DeleteDvdComponent } from './delete-dvd/delete-dvd.component';
import { DisplayComponent } from './display/display.component';
import { ReportComponent } from './report/report.component';
import { ReturnComponent } from './return/return.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Display2Component } from './display2/display2.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { DisplayReaderComponent } from './display-reader/display-reader.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'My Library System' }
  },
  {
    path: 'add/book',
    component: AddBookComponent,
    data: { title: 'Add new Book' }
  },
  {
    path: 'add/dvd',
    component: AddDvdComponent,
    data: { title: 'Add new Dvd' }
  },
  {
    path: 'display/books',
    component: DisplayComponent,
    data: { title: 'All Books' }
  },
  {
    path: 'display/dvds',
    component: Display2Component,
    data: { title: 'All DVDs' }
  },
  {
    path: 'add/reader',
    component: AddReaderComponent,
    data: { title: 'All DVDs' }
  },
  {
    path: 'display/reader',
    component: DisplayReaderComponent,
    data: { title: 'All DVDs' }
  },
  {
    path: 'borrow',
    component: BorrowComponent,
    data: { title: 'All DVDs' }
  },
  {
    path: 'return',
    component: ReturnComponent,
    data: { title: 'All DVDs' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AddDvdComponent,
    BorrowComponent,
    DeleteBookComponent,
    DeleteDvdComponent,
    DisplayComponent,
    ReportComponent,
    ReturnComponent,
    HomeComponent,
    NavBarComponent,
    Display2Component,
    AddReaderComponent,
    DisplayReaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
