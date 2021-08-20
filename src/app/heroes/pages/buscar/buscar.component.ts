import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeseleccionado!: Heroe |undefined;
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }
  buscando() {
    this.heroesService.getsubgerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes);

  }

  opcionselecionada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      console.log('no hai valor');
      this.heroeseleccionado = undefined;
      return;
    }
    

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroe(heroe.id!)
    .subscribe((heroe:any) => this.heroeseleccionado = heroe)
  }
}
