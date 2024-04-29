import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { Figlio } from '../Interface/figlio';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [FormComponent, CarouselComponent] 
})
export class LandingPageComponent {
figlio: Figlio = {
  nome: 'Mirko',
  cognome: 'Rossi',
  email: 'mirkorossi@gmail.com'
}
risposta(){
  console.log('Ciao figlio!');
}
}
