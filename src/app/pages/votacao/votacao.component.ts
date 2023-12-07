import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { Restaurante } from 'src/app/models/Restaurante';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { VotacaoService } from 'src/app/services/votacao.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  matricula: number | undefined;
  nomeFuncionario: string | undefined;
  idFuncionario: number | undefined;
  restauranteSelecionado: number | undefined;

  restaurantes: Restaurante[] = [];

  constructor( private votacaoService: VotacaoService, 
    private funcionarioService: FuncionarioService, 
    private http: HttpClient,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe ) {}

  ngOnInit(): void {

    this.ActivatedRoute.queryParams.subscribe(params => this.idFuncionario = params["idFuncionario"]);
    this.ActivatedRoute.queryParams.subscribe(params => this.matricula = params["matricula"]);
    this.ActivatedRoute.queryParams.subscribe(params => this.nomeFuncionario = params["nomeFuncionario"]);
    
    this.votacaoService.GetRestaurantes().subscribe(data => {
      const dados = data.dados;
      this.restaurantes = data.dados;
    });
  }  

  onClickVotar(){
    const dataAtual = new Date().toISOString();

    const voto = {
      idVotacao: 0,
      dtVotacao: dataAtual,
      idFuncionario: this.idFuncionario,
      idRestaurante: this.restauranteSelecionado
    };

    this.subscription.add(
      this.votacaoService.CreateVoto(voto).subscribe(data => {
        this.router.navigate(['/resultado']);
      })
    );
  }
}

