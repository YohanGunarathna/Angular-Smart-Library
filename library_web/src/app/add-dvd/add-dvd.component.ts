import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.css']
})
export class AddDvdComponent implements OnInit {

  dvdCount:any = [];

  @Input() dvdData = { isbn:'', title: '', sector: '', language: '', subtitles: '', producer: '', actors: '', pubyear: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getLibraryDvdsCount().subscribe((data: {}) => {
      console.log(data);
      this.dvdCount = data;
    });
  }
  addDVD() {
    this.rest.saveDvd(this.dvdData).subscribe((result) => {
      alert('New DVD Added Succesfully!');
    }, (err) => {
      console.log(err);
    });
  }
}
