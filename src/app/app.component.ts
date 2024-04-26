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
  scrivi(): void {
    // let flag=true;
    // for (let i = 0; i < this.messages.length && flag; i++) {
    //   if (this.k === 0 && flag) {
    //     this.k=1;
    //     flag=false;
    //   } if (this.k === 1 && flag) {
    //     this.k = 2;
    //     flag=false;
    //   } if (this.k === 2 && flag) {
    //     this.k = 3;
    //     flag=false;
    //   } if (this.k === 3 && flag) {
    //     this.k = 4;
    //     flag=false;
    //   } else if (flag) {
    //     this.k = 0;
    //     flag=false;
    //   }
    // }
    if (this.k >= 4 || this.k === undefined){
      this.k=0;
    }
    else {
      this.k++;
    }
    this.title = `Ciao ${this.messages[this.k]}`;
    this.prova=!this.prova;

  }
}

// scrivi (ciccio: string): void {
//   this.title = `Ciao ${ciccio}`;
//   this.prova = !this.prova;
