import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('Alunos de rota filha');
    // console.log(childRoute);
    // console.log(state);

    //Executa alguma logica de programacao
    // if(state.url.includes('editar')) {
    //   alert('Aluno nao pode editar')
    //   return false;
    // }

    return true;
  }

}
