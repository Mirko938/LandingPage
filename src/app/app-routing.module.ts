import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeadComponent } from './lead/lead.component'
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component'

const routes: Routes = [{

    path: 'landing-page',
    component: LandingPageComponent
},

{    path: 'lead',
    component: LeadComponent
},

{  path: 'langind-page/lead',
    component: HeaderComponent

},


{ // caso di path che non esiste
    path: '**', // se c'è un errore nel path in URL
    redirectTo: 'landing-page', // mi rimanda a landing page
    pathMatch: 'full' //deve corrispondere tutto il path
},

{ // caso di path vuoto
    path: '', // se c'è un errore nel path in URL
    redirectTo: 'landing-page', // mi rimanda a landing page
    pathMatch: 'full' //deve corrispondere tutto il path
}


];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
