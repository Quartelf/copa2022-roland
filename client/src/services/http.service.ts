import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLUtils } from './URLUtils';
@Injectable({
  providedIn: 'root'
})
export class HttpService{

  constructor(private httpClient : HttpClient) {
  
  }

  private makeHttpOptions(){
    const token = window.localStorage.getItem('token');

    if(token){
      return {
        headers : {
          'Authorization': 'bearer ' + token
        }
      }
    }
    return
    }

  public get(route : string) : Promise<any>{
    return this.httpClient.get(URLUtils.getUrl() + route, this.makeHttpOptions()).toPromise();
  }

  public post(route : string, obj : any) : Promise<any>{
    return this.httpClient.post(URLUtils.getUrl() + route, obj, this.makeHttpOptions()).toPromise();
  }


  public patch(route : string, obj : any) : Promise<any>{
    return this.httpClient.patch(URLUtils.getUrl() + route, obj, this.makeHttpOptions()).toPromise();
  }  

  public put(route : string, obj : any) : Promise<any>{
    return this.httpClient.put(URLUtils.getUrl() + route, obj, this.makeHttpOptions()).toPromise();
  }  

}
