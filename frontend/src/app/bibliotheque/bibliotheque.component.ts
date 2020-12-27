import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BibliothequesService} from '../bibliotheques.service';
import { Bibliotheque } from '../models/bibliotheque';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.less']
})
export class BibliothequeComponent implements OnInit {

  id: number;
  bibliotheque: Bibliotheque;

  constructor(private route: ActivatedRoute, private router: Router, public bibliothequesService: BibliothequesService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.bibliotheque = this.bibliothequesService.getBibliotheque(this.id);
  }

  saveBibliotheque(): void{
    this.bibliothequesService.saveBibliotheque(this.bibliotheque);
    this.router.navigate(['/bibliotheques']);
  }

}