import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  matricula : string = '';
  password : string = '';
  nome : string = '';

  hide : boolean = true;
  isLogin : boolean = false;

  constructor(private router : Router, private Httpservice : HttpService) { }

  ngOnInit(): void { 
    setTimeout(() => {
      this.login();
    })
  }

  public async login(){
    await this.Httpservice.post('student', {matricula : this.matricula, password :this.password, name : this.nome});
    await window.alert("Registrado com sucesso")
    }
  

  
}