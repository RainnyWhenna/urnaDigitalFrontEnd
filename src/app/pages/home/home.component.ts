import { Component } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  matricula: number | undefined;
  funcionario: Funcionario[] = []
  nome: string | undefined;

  constructor( private funcionarioService: FuncionarioService , private router: Router) { }

  onClickButton(){
    if (this.matricula){
      this.funcionarioService.GetFuncionarioByMatricula(this.matricula).subscribe(data => {
        if(data.sucesso){
          const dados = data.dados;
          this.router.navigate(['/votacao'], { queryParams: dados });
        } else {
          alert(data.mensagem);
          console.log(data.mensagem);
        }
      });
    } else {
      alert('Seu espertinho, digite sua matrícula!');
    }
  }
}