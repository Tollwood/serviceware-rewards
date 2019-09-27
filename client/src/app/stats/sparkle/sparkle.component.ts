import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-sparkle',
    templateUrl: './sparkle.component.html',
    styleUrls: ['./sparkle.component.scss']
})
export class SparkleComponent implements OnInit {
    @Input('size') size: number = 80;

    constructor() {}

    ngOnInit() {}
}
