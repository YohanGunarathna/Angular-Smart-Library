import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  @Input() returnItem = { isbn:''};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  rBook() {
    this.rest.returnItem(this.returnItem).subscribe((result) => {
      alert("Item Return successfully!!!");
    }, (err) => {
      console.log(err);
    });
  }

}
