import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookCount:any = [];

  @Input() bookData = { isbn:'', title: '', sector: '', authors: '', publisher: '', pages: '', pubyear: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getLibraryBooksCount().subscribe((data: {}) => {
      console.log(data);
      this.bookCount = data;
    });
  }

  addBook() {
    this.rest.saveBook(this.bookData).subscribe((result) => {
      alert('New Book Added Succesfully!');
    }, (err) => {
      console.log(err);
    });
  }

}
