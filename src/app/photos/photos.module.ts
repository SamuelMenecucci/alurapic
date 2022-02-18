//para que app.module não fique sobrecarregado com as importações dos componentes no declarations, crio um outro módulo que irá encapsular os componentes que pertencem há um mesmo conceito na aplicação. o app.module é um modulo root, que será o primeiro módulo a ser carregado na build.

import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

//para criar um módulo, utilizo o @NgModule e passo um objeto para as configurações.
@NgModule({
  //declarations é aonde eu declaro os componentes
  declarations: [PhotoComponent],

  //exports é o que exporto para que o componente seja acessível.
  exports: [PhotoComponent],
})
export class PhotosModules {}
