import { Component, OnInit } from '@angular/core';
import { BodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers : [BodyService]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
