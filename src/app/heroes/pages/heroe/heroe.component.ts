import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width:100%;
    border-radius: 5px;
  }
  
  `
  ]
})
export class HeroeComponent implements OnInit {


  heroe!: Heroe;
  constructor(private ActivatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    
    this.ActivatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroe(id))
      )
      .subscribe((heroe:any)=>this.heroe = heroe)

  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
