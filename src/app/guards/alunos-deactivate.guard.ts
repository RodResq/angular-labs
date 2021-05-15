import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AlunoFormComponent} from '../alunos/aluno-form/aluno-form.component';
import {IFormCandeactivate} from './IFormCandeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCandeactivate>{

  canDeactivate(component: IFormCandeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('guarda de desativacao');

    return component.podeDesativar();
  }

}
