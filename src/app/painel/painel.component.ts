import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase.";
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase = new Frase("","");
  //public rodadaFrase!: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.atualizaRodada();  
   }


  ngOnInit(): void {
  }

  public atualizarResposta(reposta: Event): void {
    this.resposta = (<HTMLInputElement>reposta.target).value;   
  }

  public verificarResposta(): void {
      if(this.rodadaFrase.frasePT == this.resposta){      

      //muda rodada da pergunta
      this.rodada++;

      //aumenta o progresso caso acerto
      this.progresso += 25;

      if (this.rodada === 4) {
        this.encerrarJogo.emit("Vitoria");
      }
      
      this.atualizaRodada();   

    }else {
      if (this.tentativas == 0){
        this.encerrarJogo.emit("Derrota");
      } else {
        alert("A tradução está errada.");
        this.tentativas--;      
      }

    }

  }

  //atualiza a rodada conforma o index do this.rodada
  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }



}

