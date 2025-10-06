/**
 * Melhore o código abaixo
 * 
 * melhorei adicionando estilização para cada status e englobando as div em uma section, e exportando o status passando o valor correto;
 */

import { Component } from '@angular/core';

@Component({
  selector: "app-item",
  template: `
    <section>
      <div class="error" *ngIf="status === 'error'">Erro!</div>
      <div class="sucesso" *ngIf="status === 'success'">Sucesso!</div>
      <div class="atencao" *ngIf="status === 'warning'">Atenção!</div>
    </section>
  `,
  styles: [
    `
			.error{
				color: red;
			}

			.sucesso{
				color: green;
			}

			.atencao{
				color: yellow;
			}
		`,
  ],
})
export class ItemComponent {
  status: "error" | "success" | "warning" | null = null;
}