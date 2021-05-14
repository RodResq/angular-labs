import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AlunoFormComponent} from '../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent>{

  canDeactivate(component: AlunoFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('guarda de desativacao');

    return component.pudeDesativarRota();
  }

}
