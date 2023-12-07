import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from 'src/app/models/Restaurante';
import { Response } from 'src/app/models/Response';
import { Votacao } from '../models/Votacao';

@Injectable({
  providedIn: 'root'
})
export class VotacaoService {

  private apiUrl = `${environment.ApiUrl}/Home`

  constructor( private http: HttpClient ) { }

  GetRestaurantes() : Observable<Response<Restaurante[]>> {
    return this.http.get<Response<Restaurante[]>>(this.apiUrl + '/GetRestaurantes');
  }

  CreateVoto(dados: Votacao) : Observable<any>{
    return this.http.post(`${this.apiUrl}/CreateVoto`, dados);
  }
}
