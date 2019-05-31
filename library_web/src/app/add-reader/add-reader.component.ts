import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  @Input() reader = { readerid:'', name: '', mobileno: '', email: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addReader() {
    this.rest.saveReader(this.reader).subscribe((result) => {
      alert("Reader save successfully!!!");
    }, (err) => {
      console.log(err);
    });
  }

}
