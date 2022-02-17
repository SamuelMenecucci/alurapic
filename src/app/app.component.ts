import { Component } from "@angular/core";

@Component({
  //nome que será utilizado para selecionar o componente e chama-lo em outro local da aplicação
  selector: "app-root",

  //html que é montado no componente e será exibido no browser
  templateUrl: "./app.component.html",

  //estilização que o componente utiliza
  styleUrls: ["./app.component.css"],
})

//um componente em angular é uma classe, e a convenção para o nome da classe é PascalCase
export class AppComponent {
  //as propriedades são chamadas no htlm do próprio componente
  title = "alurapic";
}
