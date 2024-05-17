import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  messages: string[] = ['Mirko', 'Giacomo', 'Luca', 'Jacopo', 'Gabriele'];
  title!: string;
  prova: boolean = false;
  k!: number;
  constructor() {}
}
