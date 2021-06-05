import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Player {
  name: string;
  score: number;
}
export interface Score {
  name: string;
  score: number;
}

export interface AuthTokenResponse {
  success: Boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;
  private token: any;
  private url = `http://localhost:8080/scores`;
  public selectedColor;

  constructor(private _http: HttpClient) { }


  public checkToken(token: any): Observable<AuthTokenResponse> {
    this.token = token;
    const url = `http://localhost:8080/check-token`;
    const request = {
      "auth-token": token,
      headers: {
        accept: 'application/json',
      },
    };
    return this._http.post<AuthTokenResponse>(url, request);
  }
  public readScore(): Observable<Player> {
    const url = `http://localhost:8080/scores`;
    return this._http.get<Player>(url, {
      headers: {
        accept: 'application/json',
      },
    });
  }
  // public sendScore(): Observable<Score> {
  //   const url = `http://localhost:8080/scores`;
  //   return this._http.post<Score>(url)
  // }

  public setData(data: any) {
    this.data = data;
  }

  public getData(): any {
    return this.data;
  }

}
