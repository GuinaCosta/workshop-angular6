import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class PesquisaPaisesService {
  baseUrl = 'https://restcountries.eu/rest/v2/lang/';

  constructor(private http: HttpClient) {
  }

  public ListarPaises<Tmodel>(langCode: string) {
    return this.http.get<Tmodel[]>(this.baseUrl + langCode);
  }

}
