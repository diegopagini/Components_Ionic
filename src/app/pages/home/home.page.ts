import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public components: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirecTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirecTo: '/button',
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirecTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirecTo: '/checkbox',
    },
    {
      icon: 'calendar-outline',
      name: 'Date-Time',
      redirecTo: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirecTo: '/fab',
    },
  ];
}
