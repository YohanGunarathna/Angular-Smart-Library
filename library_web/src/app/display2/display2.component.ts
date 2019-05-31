import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  dvds:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.getdvds();
  }

  getdvds() {
    this.dvds = [];
    this.rest.getLibraryDvds().subscribe((data: {}) => {
      console.log(data);
      this.dvds = data;
    });
  }

  add() {
    this.router.navigate(['/product-add']);
  }

  delete(isbn) {
    this.rest.deleteDvd(isbn)
      .subscribe(res => {
          this.getdvds();
          alert('DVD Deleted Succesfully!');
        }, (err) => {
          console.log(err);
        }
      );
  }

}
