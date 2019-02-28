import { Injectable } from '@angular/core';
import { Submenu } from './submenu.model';
import { Sidenav } from './sidenav.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Sidenav[] = [new Sidenav(
    'General',
    'settings',
    [
      new Submenu('Blockout', '/blockout'),
    ]
  ),
  new Sidenav(
    'Farematch',
    'settings',
    [
      new Submenu('Codeshare', '/blockout'),
      new Submenu('Indicadores', './indicadores'),
      new Submenu('Up Sale', './indicadores'),
      new Submenu('Delta x Carrier', './indicadores'),
    ]
  ),
  new Sidenav(
    'Waiver',
    'settings',
    [
      new Submenu('ADVP', '/blockout'),
      new Submenu('Max Stay', './indicadores'),
      new Submenu('Min Stay', './indicadores'),
    ]
  )];

  constructor () { }
}
