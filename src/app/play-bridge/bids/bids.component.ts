import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  constructor(constants: ConstantsService) { }

  ngOnInit(): void {
  }
}
