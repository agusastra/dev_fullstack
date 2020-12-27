import { Component, OnInit } from '@angular/core';
import { BibliothequesService} from '../bibliotheques.service';

@Component({
  selector: 'app-bibliotheques',
  templateUrl: './bibliotheques.component.html',
  styleUrls: ['./bibliotheques.component.less']
})
export class BibliothequesComponent implements OnInit {

  constructor( public bibliothequesService: BibliothequesService) { }

  ngOnInit(): void {
  }

}