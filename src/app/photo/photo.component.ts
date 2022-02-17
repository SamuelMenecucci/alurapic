//o componente em angular sempre é um arquivo ts, nomeado nomeDoComponente.component.ts

//sempre que formos criar um componente,, precisamos importar o Component do angular/core
import { Component } from "@angular/core";

@Component({
  //o selector é o nome do componente que eu irei chamar quando eu quiser utiliza-lo
  //uma boa prática é pré-fixar todos os componentes que for criar, estou utilizando ap pois a aplicação chama Alura Pic
  selector: "ap-photo",

  //templateUrl recebe o nome do arquivo html que pertence ao componente e que será exibido quando chamarmos esse componente na nossa aplicação.
  templateUrl: "photo.component.html",
})

//um componente em angular é  uma classe e a convenção para o nome da classe é PascalCase
export class PhotoComponent {
  description = "Dragão";
  url =
    "https://img.elo7.com.br/product/zoom/26B13B5/painel-de-festa-dragao-2-dragao.jpg";
}
