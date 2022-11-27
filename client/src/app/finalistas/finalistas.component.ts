import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './finalistas.component.html',
  styleUrls: ['./finalistas.component.scss']
})

export class FinalistasComponent  {
  fkmatricula = ''
  finalistas = ''
  matriculalocal = localStorage.getItem('matricula')

  constructor(private httpservice : HttpService) { }


  public async Enviar(){
    await this.httpservice.post('finalistas', {
    finalistas : this.finalistas,
    fkstudent  : this.matriculalocal
  })
}
}
