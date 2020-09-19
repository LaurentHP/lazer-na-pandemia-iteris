import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { JogoPageComponent } from './components/jogo-page/jogo-page.component';
import { HelpComponent } from './components/help/help.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
      { path: '', component: JogoPageComponent },
      { path: 'sobre', component: SobrePageComponent },
      { path: 'help', component: HelpComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
