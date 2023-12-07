import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotacaoComponent } from './pages/votacao/votacao.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'votacao', component: VotacaoComponent},
  {path: 'resultado', component: ResultadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
