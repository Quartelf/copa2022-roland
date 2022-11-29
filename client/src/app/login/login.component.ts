import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { URLUtils } from 'src/services/URLUtils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  matricula : string = '';
  password : string = '';
  hide : boolean = true;
  isLogin : boolean = false;

  constructor(private router : Router, private HttpClient : HttpClient, public dialog : MatDialog) { }

  ngOnInit(): void { 
    setTimeout(() => {
      this.login();
    })
  }

  public login(){
    this.HttpClient.post(URLUtils.getUrl() + '/logon', {matricula : this.matricula, password : this.password}).toPromise().then((response : any)=> {
    console.log(response);
      if(response.token){
        this.isLogin = true;
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('matricula', this.matricula);
        this.router.navigateByUrl('');
        console.log("Logado");
      }
    })
  }

  public async registro(){
    const dialog = this.dialog.open(CadastroComponent, {
      width : 'auto'
    })
    
  } 

  
}
