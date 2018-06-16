import { Component, OnInit } from '@angular/core';
import { PesquisaPaisesService } from '../pesquisa-paises.service';
import { Pais } from '../pais';
import { Observable, of } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap, filter, catchError, tap, timeout, flatMap, mergeMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listapaises',
  templateUrl: './listapaises.component.html',
  styleUrls: ['./listapaises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  lista: string[];
  lang: string;
  items: Array<Pais>;
  term = new FormControl();
  semResultado = false;

  constructor(private request: PesquisaPaisesService) {
    this.lista = [];
    this.lang = 'pt';
   }

  ngOnInit() {
    this.updateLista();

    this.term.valueChanges
      .subscribe(paises =>  { this.semResultado = false; this.items = paises; });
  }

  public updateLista() {
    this.lista = [];
    this.request.ListarPaises<Pais>(this.lang).subscribe((data) => {
      data.forEach((item) => { this.lista.push(item.name); });
    });
  }

  public eventoCallback(event) {
    console.log('Evento de Call Back');
  }

}
