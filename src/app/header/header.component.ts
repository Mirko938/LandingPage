import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LeadComponent } from '../lead/lead.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
 routes!: Router;
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  toHome(): void {
    location.href  = 'http://localhost:4200/landing-page';
  }
}
