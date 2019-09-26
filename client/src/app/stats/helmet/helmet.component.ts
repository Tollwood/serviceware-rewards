import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helmet',
  templateUrl: './helmet.component.html',
  styleUrls: ['./helmet.component.scss']
})
export class HelmetComponent implements OnInit {
  imagePath: string ="./viking.png";
  constructor() { }

  ngOnInit() {
  }

}
