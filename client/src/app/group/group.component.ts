import { Component } from '@angular/core';
import { HttpService } from 'src/services/http.service';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})

export class GroupComponent {
  grupoa    : string = '';
  grupob    : string = '';
  grupoc    : string = '';
  grupod    : string = '';
  grupoe    : string = '';
  grupof    : string = '';
  grupog    : string = '';
  grupoh    : string = '';
  fkstudent : string = '';
  matriculalocal = localStorage.getItem('matricula')

  results : any;

  constructor(private httpService : HttpService) { }

  public async add(){
    await this.httpService.post('results', {grupoa : this.grupoa, grupob : this.grupob, grupoc : this.grupoc,
    grupod : this.grupod, grupoe : this.grupoe, grupof : this.grupof, grupog : this.grupog, grupoh : this.grupoh,
    fkstudent : this.matriculalocal
  })
  console.log('Foi?')
  }

  public async get(){
    this.results = await this.httpService.get(`results/${this.matriculalocal}`);
  }

}

