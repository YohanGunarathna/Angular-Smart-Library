import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addBook(){
    this.router.navigate(['/add/book']);
  }

  addDVD(){
    this.router.navigate(['/add/dvd']);
  }

  displaybooks(){
    this.router.navigate(['/display/books']);
  }

  displaydvds(){
    this.router.navigate(['/display/dvds']);
  }

  borrow(){
    this.router.navigate(['/borrow']);
  }

  return(){
    this.router.navigate(['/return']);
  }
}
