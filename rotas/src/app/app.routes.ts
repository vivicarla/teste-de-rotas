import { Routes } from '@angular/router';
import { Resenha } from './resenha/resenha';
import { Tropa } from './tropa/tropa';
import { Nahida } from './nahida/nahida';

export const routes: Routes = [
    {path: 'resenha',component:Resenha},
    {path: 'tropa',component:Tropa},
    {path: 'nahida',component:Nahida},
];
