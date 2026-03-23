import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Resenha } from './resenha/resenha';
import { Tropa } from './tropa/tropa';
import { Nahida } from './nahida/nahida';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Resenha, Tropa, RouterLink, Nahida],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rotas');
}
