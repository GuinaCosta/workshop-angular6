import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoloComponent } from './bolo/bolo.component';
import { PaisesModule } from './paises/paises.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaPaisesComponent } from './paises/listapaises/listapaises.component';

@NgModule({
  declarations: [
    AppComponent,
    BoloComponent,
    ListaPaisesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
