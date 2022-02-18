//esse arquivo é o primeiro módulo que é carregado pela aplicação. para que possamos renderizar um componente criado, precisamos declarar ele aqui, pois se não for declarado, ele não será exibido e irá trazer um erro.

//por convenção, deixarei todos os imports que é feito pelo angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PhotosModules } from "./photos/photos.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  //dentro de declarations, colocamos os componentes que iremos usar na aplicação.
  declarations: [AppComponent],

  //imports é aonde eu importo módulos.
  //importo o PhotosModules que é aonde está encapsulado os componentes que são pertinentes a um determinado conceito.

  imports: [
    BrowserModule,
    PhotosModules,
    //o HttpClientModule é um módulo provider de http para fazer as configurações da aplicação, para que eu possa utilizar ele no constructor e fazer as requisições
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
