import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad ,CanActivate{
  
  constructor(private AuthService: AuthService,
              private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
     /* if (this.AuthService.auth.id) {
        return true;
      }
      console.log('Bloqueado por gard -canactivate');
    return false;*/
    return this.AuthService.verificacionautenticacion()
      .pipe(
        tap(estaautenticado => {
          if (!estaautenticado) {
            this.router.navigate(['./auth/login']);
               }
             })
           )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
      
    return this.AuthService.verificacionautenticacion()
    .pipe(
      tap(estaautenticado => {
        if (!estaautenticado) {
          this.router.navigate(['./auth/login']);
             }
           })
         )


   /* if (this.AuthService.auth.id) {
      return true;
    }
    console.log('Bloqueado por gard -canload');
    return false;
*/
    
    
  }

}
