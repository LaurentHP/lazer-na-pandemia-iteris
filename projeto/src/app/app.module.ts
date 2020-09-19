import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FixedButtonComponent } from './components/fixed-button/fixed-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { CardJogoComponent } from './components/card-jogo/card-jogo.component';
import { JogoPageComponent } from './components/jogo-page/jogo-page.component';
import { HelpComponent } from './components/help/help.component';
import { MatExpansionModule } from '@angular/material/expansion';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuPagLayoutComponent,
    SobrePageComponent,
    CardJogoComponent,
    JogoPageComponent,
    FixedButtonComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // extra
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule
  ],
  providers:  [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
