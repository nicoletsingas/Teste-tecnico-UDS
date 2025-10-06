/**
 * O botão de adicionar item não atualiza a tela imediatamente.
 * 
 * eu criei uma nova lista (array) com o operador spread, que cria uma copia do original, e assim atualiza com o item novo
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
})
export class ItemComponent {

	@Input() list: string[] = [];

	add(item: string) {
		this.list = [...this.list, item];
	}

}