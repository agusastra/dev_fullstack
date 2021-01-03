import { Component, OnInit } from '@angular/core';
import { Bibliotheque} from '../models/bibliotheque';
import { BibliothequesService} from '../bibliotheques.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliotheques',
  templateUrl: './bibliotheques.component.html',
  styleUrls: ['./bibliotheques.component.less']
})
export class BibliothequesComponent implements OnInit {

  nom: string;
  adresse: string;
  telephone: string;
  description: string;
  bibliotheques: any;

  constructor(public bibliothequesService: BibliothequesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getBibliotheques();
  }

  // tslint:disable-next-line:typedef
  getBibliotheques() {
    this.bibliothequesService.getBibliotheques().subscribe(
      (bibliotheques: Array<Bibliotheque>) => {
        this.bibliotheques = bibliotheques;
      },
      (error) => {
        console.log('error ' + error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  addBibliotheque() {
    const bibliotheque: Bibliotheque = new Bibliotheque();
    
    bibliotheque.nom = this.nom;
    bibliotheque.adresse = this.adresse;
    bibliotheque.telephone = this.telephone;
    bibliotheque.description = this.description;
    
    this.nom = '';
    this.adresse = '';
    this.telephone = '';
    this.description = '';

    this.bibliothequesService.addBiblotheque(bibliotheque).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      (bibliotheque: any) => {
        console.log(`coucou je suis la !`);
        this.bibliotheques.push(bibliotheque);
        this.router.navigate(['/bibliotheques']).then( () => { });
      },
      (error) => {
        console.log('error ' + error);
      }
    );
  
  }

  // tslint:disable-next-line:typedef
  deleteBibliotheque(bibliotheque: Bibliotheque) {
    if (confirm('Voulez vous supprimer la bibliotheque ?') === true) {
      this.bibliothequesService.deleteBibliotheque(bibliotheque._id).subscribe(
        () => {
          const index = this.bibliotheques.indexOf(bibliotheque);
          this.bibliotheques.splice(index, 1);
        },
        (error) => {
          console.log('delete of ID: ' + bibliotheque._id + 'error' + error);
        }
      );
    }
  }
}
