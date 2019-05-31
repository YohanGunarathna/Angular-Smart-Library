import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-reader',
  templateUrl: './display-reader.component.html',
  styleUrls: ['./display-reader.component.css']
})
export class DisplayReaderComponent implements OnInit {

  readers:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getLibraryReaders();
  }

  getLibraryReaders() {
    this.readers = [];
    this.rest.getLibraryReaders().subscribe((data: {}) => {
      console.log(data);
      this.readers = data;
    });
  }
}
