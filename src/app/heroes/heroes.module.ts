import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmaeComponent } from './components/confirmae/confirmae.component';




@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmaeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule ,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroresModule { }
