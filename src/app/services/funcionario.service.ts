import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';
import { Response } from 'src/app/models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Home/GetFuncionarioByMatricula?intMatricula=`

  constructor( private http: HttpClient ) { }

  GetFuncionarioByMatricula(matricula: number) : Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(this.apiUrl+matricula)
  }
}