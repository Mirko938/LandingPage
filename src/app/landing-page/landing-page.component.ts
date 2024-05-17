import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Figlio } from '../Interface/figlio';
import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  imports: [
    FormComponent,
    CarouselComponent,
    CarouselModule,
    ButtonModule,
    HeaderComponent,
  ],
})
export class LandingPageComponent {
  list = [
    {
      symbol: 'compost',
      text: 'Green Biomaterials availability',
    },
    {
      symbol: 'science',
      text: 'Biodegradable and biocompatible instruments',
    },
    {
      symbol: 'manufacturing',
      text: 'Good practeces to reduce carbon footprint',
    },
  ];
}
