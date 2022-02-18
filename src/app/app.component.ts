import { HttpClient } from "@angular/common/http";
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

  //aqui irei colocar a resposta que eu obtiver da api, utilizando o http.get
  //dentro do retorno da api possui a propriedade url e description
  photos: Object[] = [];

  //para consumir dados de uma api com angular, eu posso fazer a configuração do httpclient de forma manual ou posso utilizar o constructor para que seja feita para mim.
  //toda classe em ecmascript e typescript possui um constructor. dentro do parametro, eu passo http e preciso passar o tipo dele com o typescript
  //o httpclient é o provider que mostra ao constructor como configurar o http, para que não precisemos fazer tudo de forma manual. precisamos fazer o import dentro do root module (app.module.ts)
  constructor(http: HttpClient) {
    //ao invés de o angular utilizar promisses ele utiliza observable. então no observable nós podemos utilizar o subscrive, que é o equivalente ao then, consigo passar uma função, passando a resposta como parâmetro e fazer o que eu quiser, como colocar a resposta dentro de uma variável
    http
      .get<Object[]>("http://localhost:3000/flavio/photos")
      .subscribe((res) => {
        console.log(res);
        this.photos = res;
      });
  }
}
