//o componente em angular sempre é um arquivo ts, nomeado nomeDoComponente.component.ts

//sempre que formos criar um componente,, precisamos importar o Component do angular/core
import { Component, Input } from "@angular/core";

@Component({
  //o selector é o nome do componente que eu irei chamar quando eu quiser utiliza-lo
  //uma boa prática é pré-fixar todos os componentes que for criar, estou utilizando ap pois a aplicação chama Alura Pic
  selector: "ap-photo",

  //templateUrl recebe o nome do arquivo html que pertence ao componente e que será exibido quando chamarmos esse componente na nossa aplicação.
  templateUrl: "photo.component.html",
})

//um componente em angular é  uma classe e a convenção para o nome da classe é PascalCase
export class PhotoComponent {
  //essas propriedade são chamadas dentro do html do próprio componente

  //para passar os valores dessas propriedades por atributos do componente no arquivo htlm, preciso colocar o @input()
  @Input() description = "";
  @Input() url = "";
}
