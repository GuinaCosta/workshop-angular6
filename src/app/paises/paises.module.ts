import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPaisesComponent } from './listapaises/listapaises.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaPaisesComponent],
  exports: [ListaPaisesComponent]
})
export class PaisesModule {

}
