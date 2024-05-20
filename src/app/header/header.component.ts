import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
url: any[] = ["http://localhost:4200/landing-page"]
  constructor(private primengConfig: PrimeNGConfig,
              private router: Router
  ) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  toHome(): void {
    this.router.navigate(this.url)
    }
  }
