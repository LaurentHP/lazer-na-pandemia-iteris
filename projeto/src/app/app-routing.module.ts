import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
      { path: '', component: ExemploComponent },
      { path: 'sobre', component: SobrePageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
