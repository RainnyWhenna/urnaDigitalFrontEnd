import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Resultado } from '../models/Resultado';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  private apiUrl = `${environment.ApiUrl}/Home/GetRestauranteEscolhido`

  constructor( private http: HttpClient ) { }

  GetRestauranteEscolhido() : Observable<Response<Resultado>> {
    return this.http.get<Response<Resultado>>(this.apiUrl)
  }
}
