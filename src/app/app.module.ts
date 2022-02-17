//esse arquivo é o primeiro módulo que é carregado pela aplicação. para que possamos renderizar um componente criado, precisamos declarar ele aqui, pois se não for declarado, ele não será exibido e irá trazer um erro.

//por convenção, deixarei todos os imports que é feito pelo angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

//depois todos os imports feito por mim
//importo o componente que criei e coloco ele em declarations
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  //dentro de declarations, colocamos os componentes que iremos usar na aplicação.
  declarations: [AppComponent, PhotoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
