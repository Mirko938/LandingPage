import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Carousel } from '../Interface/carousel';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, GalleriaModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  carousels: Carousel[] = [
    {
      indirizzo: 'assets/Image/biomaterials.jpg',
      symbols: 'compost',
      text1: 'Biomaterials',
      text2: 'Green biomaterials availability',
    },
    {
      indirizzo: 'assets/Image/carbonfootprint.jpg',
      symbols: 'barefoot',
      text1: 'Ecological',
      text2: 'Good practeces to reduce carbon footprint',
    },
    {
      indirizzo: 'assets/Image/consulenza.jpg',
      symbols: 'call',
      text1: 'Free advice!',
      text2: 'Compile the form!',
    },
  ];

  image = [
    {
      indirizzo: '/assets/Image/chemistry2.png',
      alt: 'first slide',
    },
    {
      indirizzo: '../assets/Image/biomaterials.jpg',
      alt: 'second slide',
    },
    {
      indirizzo: '/assets/Image/consulenza.jpg',
      alt: 'third slide',
    },
  ];
}
