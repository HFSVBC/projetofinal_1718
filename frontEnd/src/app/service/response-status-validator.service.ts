import { Injectable } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { AlertService } from '../alerts/alert.service';

@Injectable()
export class ResponseStatusValidatorService {

  constructor(public authService: AuthService, private alertService: AlertService) { }

  validate(Resp) {
    const code = Resp['code'];

    switch (code) {
      case 401: {
        // alert('Sessao expirada 401');
        this.alertService.show('Sessao expirada, vai ser redirecionado para login.', 'danger');
        setTimeout(() => { this.authService.logout(); }, 3500);
        break;
      }
      case 403: {
        // alert('Sem Permissão 403');
        this.alertService.show('Erro 403', 'danger');
        // setTimeout(() => { this.authService.logout(); }, 3500);
        break;
      }
      case 405: {
        // alert('Post informção errada 405');
        this.alertService.show('Informação errada 405', 'danger');
        break;
      }
      case 500: {
        // alert('Erro 500');
        this.alertService.show('Erro 500', 'danger');
        // setTimeout(() => { this.authService.logout(); }, 3500);
        break;
      }
    }
  }

}
