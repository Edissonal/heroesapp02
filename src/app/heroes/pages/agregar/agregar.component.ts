import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../interfaces/heroes.interfaces';
import { Characteristic } from '../../../../../../prueba/src/app/interfaces/ofertas.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmaeComponent } from '../../components/confirmae/confirmae.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  
       img{
         width:100%;
         border-radius:5px;
       }
 
  ` ]
})
export class AgregarComponent implements OnInit {

  
  publishers = [
    { 
      id: 'DC Comics',
      desc:'DC - Comics',
    },
    { 
      id: 'Marvel  Comics',
      desc:'Marvel - Comics',
  }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
    
  }
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog:MatDialog
              
  ) { }

  ngOnInit(): void {

    
    if( !this.router.url.includes('editar') ) {
      return;
    }

    
  this.activatedRoute.params
  .pipe(
    switchMap(({ id }) => this.heroesService.getHeroe(id))
  )
  .subscribe((heroe: any) => this.heroe = heroe);
  }

  guardar() {
   
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //Actualizar
      this.heroesService.ActualizarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnacbar('registro Actualizado'));

    }else{
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.mostrarSnacbar('registro Creado')
          this.router.navigate(['/heroes/editar', heroe.id])

        });
  }
    
  }

  borrarHeroe() {

    const dialog = this.dialog.open(ConfirmaeComponent, {
      width: '250px',
      data: { ...this.heroe }
    });
    dialog.afterClosed().subscribe(
      (res) => {
        if (res) {
             this.heroesService.BorrarHeroe(this.heroe.id!)
      .subscribe(res => {
        this.router.navigate(['/heroes']);
      });
       
        }
      }
    )
    

    
  }

  mostrarSnacbar(mensaje: string) {
    
    this.snackBar.open(mensaje, 'cerrar', {
      duration:2500
    });
    
  }
}
