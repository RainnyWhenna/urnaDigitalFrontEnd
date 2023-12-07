import { Component } from '@angular/core';
import { ResultadoService } from 'src/app/services/resultado.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})

export class ResultadoComponent {
  vencedor: string | undefined;
  
  currentTime = new Date();
  startTime = new Date();
  endTime = new Date();

  constructor( private resultadoService: ResultadoService ) { }
 
  verificarHora(): boolean {
    return this.currentTime  >= this.startTime && this.currentTime  <= this.endTime;
  }

  ngOnInit(): void {
    this.startTime.setHours(11, 45, 0, 0);
    this.endTime.setHours(12, 15, 0, 0);

    if(this.currentTime >= this.startTime && this.currentTime <= this.endTime){
      this.resultadoService.GetRestauranteEscolhido().subscribe(data => {data.dados;
        const dados = data;
        this.vencedor = data.dados.nomeRestaurante;
      });
    }
  }
}
