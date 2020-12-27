import { Injectable } from '@angular/core';
import {Bibliotheque} from './models/bibliotheque';

@Injectable({
  providedIn: 'root'
})
export class BibliothequesService {

  nom: string;
  adresse: string;
  /*horaires: string;*/
  telephone: string;

  bibliotheques: Array<any> = new Array<Bibliotheque>();

  constructor() { }

  addBiblotheque(): void{
    const bibliotheque: Bibliotheque = new Bibliotheque();
    bibliotheque.id = Math.random();
    bibliotheque.nom = this.nom;
    bibliotheque.adresse = this.adresse;
    bibliotheque.telephone = this.telephone;

    this.nom = '';
    this.adresse = '';
    this.telephone = '';
    this.bibliotheques.push(bibliotheque);
  }

  deleteBibliotheque(bibliotheque: Bibliotheque): void{
    const index = this.bibliotheques.indexOf(bibliotheque);
    this.bibliotheques.splice(index, 1);
  }

  getBibliotheque(bibliothequeId: number): Bibliotheque{
    for (const bibliotheque of this.bibliotheques) {
      if ( bibliotheque.id === bibliothequeId){
        return bibliotheque;
      }
    }
    return null;
  }

  saveBibliotheque(bibliotheque: Bibliotheque): void{
    const index = this.bibliotheques.indexOf(bibliotheque);
    this.bibliotheques.splice(index, 1);
    this.bibliotheques.push(bibliotheque);
  }

}