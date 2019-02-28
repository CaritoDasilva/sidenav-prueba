import { Submenu } from './submenu.model';

export class Sidenav {
    titleMenu: string;
    submenu: Submenu[];
    iconMenu: string;
    active: boolean;

    constructor (titleMenu: string,
        iconMenu: string,
        submenu: Submenu[]
    ) {
        this.titleMenu = titleMenu;
        this.iconMenu = iconMenu;
        this.submenu = submenu;
        this.active = false;
    }
}
