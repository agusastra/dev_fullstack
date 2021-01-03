import { HttpClient } from '@angular/common/http';
import {Bibliotheque} from './models/bibliotheque';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BibliothequesService {

  bibliotheques: Array<any> = new Array<Bibliotheque>();

  constructor( private http: HttpClient) { }

  getBibliotheques(): any{
    return this.http.get('http://localhost:3500/bibliotheques');
  }

  getBibliotheque(bibliothequeId: any): Observable<any>{
    return this.http.get('http://localhost:3500/bibliotheques/' + bibliothequeId);
  }

  addBiblotheque(bibliotheque): any{
    return this.http.post('http://localhost:3500/bibliotheques', bibliotheque);
  }

  updateBibliotheque(bibliotheque: Bibliotheque): Observable<any>{
    return this.http.put('http://localhost:3500/bibliotheques/' + bibliotheque._id, bibliotheque);
  }

  deleteBibliotheque(bibliothequeId: any): Observable<any>{
    return this.http.delete('http://localhost:3500/bibliotheques/' + bibliothequeId);
  }

}

