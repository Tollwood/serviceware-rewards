import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-helmet',
  templateUrl: './helmet.component.html',
  styleUrls: ['./helmet.component.scss']
})
export class HelmetComponent implements OnInit {
  @Input() imagePath : string;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.imagePath);
  }

}
