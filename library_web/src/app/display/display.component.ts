import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  books:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.books = [];
    this.rest.getLibraryBooks().subscribe((data: {}) => {
      console.log(data);
      this.books = data;
    });
  }

  delete(isbn) {
    this.rest.deleteBook(isbn)
      .subscribe(res => {
          this.getBooks();
          alert('Book Deleted Succesfully!');
        }, (err) => {
          console.log(err);
        }
      );
  }

}
