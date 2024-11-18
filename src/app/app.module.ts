import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule para o [(ngModel)]

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component'; // Importa o componente calculadora

@NgModule({
  declarations: [
    AppComponent,        // Declara o AppComponent
    CalculadoraComponent // Declara o CalculadoraComponent
  ],
  imports: [
    BrowserModule, // Necessário para rodar a aplicação em navegadores
    FormsModule    // Necessário para o [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent] // Define o AppComponent como ponto de entrada
})
export class AppModule { }
