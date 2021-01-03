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

  id: any;
  bibliotheque: Bibliotheque;

  constructor(private route: ActivatedRoute, private router: Router, public bibliothequesService: BibliothequesService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('on charge la bibliotheque ayant l ID: ' + this.id);
    this.bibliotheque = {nom: '', adresse: '', telephone: '', description: ''};
    this.bibliothequesService.getBibliotheque(this.id).subscribe(
      (bibliotheque: Bibliotheque) => {
        this.bibliotheque = bibliotheque;
      },
      error => {
        console.log('Error lors du chargement de la bibliotheque ' + error);
      }
    );
  }

  updateBibliotheque(): void {
    this.bibliothequesService.updateBibliotheque(this.bibliotheque).subscribe(
      (bibliotheque: Bibliotheque) => {
        this.router.navigate(['/bibliotheques']);
      },
      (error) => {
        console.log('Error lors de l update de bibliotheque ayant l ID: ' + this.id + error);
      }
    );
  }

}
