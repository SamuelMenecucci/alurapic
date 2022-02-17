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
  //aqui criamos uma propriedade chamada title, description e url, e dentro do html do componente, conseguimos acessar essas propriedades.
  //as propriedades são chamadas no htlm do próprio componente
  title = "alurapic";
  description = "Leão";
  url =
    "https://img.elo7.com.br/product/zoom/26B13B5/painel-de-festa-dragao-2-dragao.jpg";
}
