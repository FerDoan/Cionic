import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fap',
  templateUrl: './fap.page.html',
  styleUrls: ['./fap.page.scss'],
})
export class FapPage implements OnInit {
  data = Array(100);
  constructor() { }

  ngOnInit() {
  }

}
