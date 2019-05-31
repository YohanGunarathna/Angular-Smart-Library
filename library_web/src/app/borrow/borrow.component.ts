import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  libItem: any;

  @Input() borrowItem = { isbn:'', rid: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  bItem() {
    this.libItem = null;
    this.rest.getItemById(this.borrowItem.isbn).subscribe((data: {}) => {

      this.libItem = data;


      if(this.libItem.readerId === null) {
        this.rest.borrowItem(this.borrowItem).subscribe((result) => {
          alert("Item Borrow successfully!!!");
        }, (err) => {
          console.log(err);
        });
  
      }else{
        alert("Item Already borowed!!!");
      }

    });

    

    
  }

}